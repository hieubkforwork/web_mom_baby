// src/services/firebase/commentService.js
//
// Toàn bộ truy cập Firebase Realtime Database cho comment nằm ở file này.
// Components/hooks không import "firebase/database" trực tiếp.
//
// ── GHI CHÚ QUERY ─────────────────────────────────────────────────────
// RTDB chỉ orderByChild được MỘT field. Root-comment feed cần lọc theo
// "postId + parentId === null" cùng lúc -> không làm trực tiếp được.
// Giải pháp: mỗi comment có field denormalized `rootOf`:
//   - root comment  -> rootOf = postId
//   - reply         -> rootOf = null
// Query root: orderByChild('rootOf').equalTo(postId)
// Query reply: orderByChild('parentId').equalTo(parentId)  (đơn giản, đủ dùng)
//
// KHÔNG dùng thêm node `commentsByPost` / `commentsByParent` vì 2 query
// trên là đủ, thêm các node đó chỉ tốn ghi mà không phục vụ gì.
// ─────────────────────────────────────────────────────────────────────

import {
  ref,
  push,
  update,
  get,
  onValue,
  off,
  query,
  orderByChild,
  equalTo,
  limitToLast,
  runTransaction,
} from "firebase/database";
import { db } from "../../firebase/config";
import { snapshotToArray } from "../../utils/comments/commentHelpers";

const commentsRef = () => ref(db, "comments");
const commentRef = (commentId) => ref(db, `comments/${commentId}`);
const reactionRef = (commentId, userId) => ref(db, `commentReactions/${commentId}/${userId}`);

/**
 * Tăng/giảm một counter bằng transaction, nhưng KHÔNG BAO GIỜ throw ra
 * ngoài. Việc tạo comment/reply/like phải luôn được coi là thành công nếu
 * bản ghi chính đã ghi xong — lỗi ở counter chỉ log ra console, không làm
 * hỏng UX (đúng yêu cầu "ưu tiên comment hoạt động chính xác trước").
 */
async function safeIncrement(path, delta) {
  try {
    await runTransaction(ref(db, path), (current) => Math.max((current || 0) + delta, 0));
  } catch (err) {
    console.error(`Không thể cập nhật counter tại ${path}:`, err);
  }
}

// ── Create ─────────────────────────────────────────────────────────────

/** Tạo comment gốc (root). */
export async function createComment({ postId, userId, userName, content }) {
  const newRef = push(commentsRef());
  const commentId = newRef.key;
  const now = Date.now();

  const payload = {
    postId,
    parentId: null,
    rootOf: postId, // field phục vụ query, xem ghi chú đầu file
    userId,
    userName: userName || "",
    content,
    createdAt: now,
    updatedAt: now,
    reactCount: 0,
    replyCount: 0,
    status: "active",
  };

  await update(commentRef(commentId), payload);

  // commentCount là counter phụ, không được để lỗi ở đây làm create fail.
  await safeIncrement(`posts/${postId}/commentCount`, 1);

  return { id: commentId, ...payload };
}

/** Tạo reply cho một comment đã tồn tại. */
export async function createReply({ postId, parentId, userId, userName, content }) {
  // Chặn reply "mồ côi" (parent không tồn tại) và reply chéo bài viết
  // (parent thuộc post khác) TRƯỚC khi ghi bất cứ gì xuống Firebase.
  const parentSnap = await get(commentRef(parentId));
  if (!parentSnap.exists()) {
    throw new Error("Bình luận bạn đang trả lời không còn tồn tại.");
  }
  const parentData = parentSnap.val();
  if (parentData.postId !== postId) {
    throw new Error("Không thể trả lời bình luận thuộc bài viết khác.");
  }

  const newRef = push(commentsRef());
  const replyId = newRef.key;
  const now = Date.now();

  const payload = {
    postId,
    parentId,
    rootOf: null,
    userId,
    userName: userName || "",
    content,
    createdAt: now,
    updatedAt: now,
    reactCount: 0,
    replyCount: 0,
    status: "active",
  };

  await update(commentRef(replyId), payload);

  // replyCount của comment cha + commentCount của post: đều là counter phụ.
  await safeIncrement(`comments/${parentId}/replyCount`, 1);
  await safeIncrement(`posts/${postId}/commentCount`, 1);

  return { id: replyId, ...payload };
}

// ── Update / Delete ────────────────────────────────────────────────────

export async function updateComment(commentId, content) {
  await update(commentRef(commentId), {
    content,
    updatedAt: Date.now(),
  });
}

/**
 * Soft delete: giữ nguyên node (và do đó giữ nguyên children/replyCount)
 * nhưng xóa content + đổi status, để UI hiện "[Bình luận đã bị xóa]" trong
 * khi các reply bên dưới vẫn còn nguyên.
 */
export async function deleteComment(commentId) {
  await update(commentRef(commentId), {
    status: "deleted",
    content: "",
    updatedAt: Date.now(),
  });
}

// ── Realtime subscriptions ─────────────────────────────────────────────
// Cả hai đều trả về hàm unsubscribe. Hook gọi giữ trách nhiệm cleanup.

/**
 * Subscribe root comments của 1 post. Phân trang được layer bên trên bằng
 * cách hook tăng dần `pageSize` (limitToLast) rồi gọi lại hàm này, thay vì
 * mở nhiều listener chồng nhau.
 */
export function subscribeToComments(postId, pageSize, callback, onError) {
  const q = query(commentsRef(), orderByChild("rootOf"), equalTo(postId), limitToLast(pageSize));
  const handle = onValue(
    q,
    (snap) => callback(snapshotToArray(snap.val())),
    (err) => onError && onError(err)
  );
  return () => off(q, "value", handle);
}

export function subscribeToReplies(parentId, pageSize, callback, onError) {
  const q = query(commentsRef(), orderByChild("parentId"), equalTo(parentId), limitToLast(pageSize));
  const handle = onValue(
    q,
    (snap) => callback(snapshotToArray(snap.val())),
    (err) => onError && onError(err)
  );
  return () => off(q, "value", handle);
}

/** Trạng thái like realtime của 1 user trên 1 comment (dùng cho nút Like). */
export function subscribeToUserReaction(commentId, userId, callback) {
  const r = reactionRef(commentId, userId);
  const handle = onValue(r, (snap) => callback(snap.exists() ? snap.val() : null));
  return () => off(r, "value", handle);
}

// ── Reactions ────────────────────────────────────────────────────────
//
// Chống like trùng: transaction chạy trên đúng node
// `commentReactions/{commentId}/{userId}` — transaction chỉ "commit" tạo
// mới nếu node đang trống, nên bấm nhanh nhiều lần / nhiều tab cũng không
// thể tạo 2 bản ghi like cho cùng 1 user.

export async function likeComment(commentId, userId) {
  const result = await runTransaction(reactionRef(commentId, userId), (current) => {
    if (current !== null) return; // đã like rồi -> abort, không làm gì
    return { type: "like", createdAt: Date.now() };
  });

  if (result.committed) {
    await safeIncrement(`comments/${commentId}/reactCount`, 1);
  }
  return result.committed;
}

export async function unlikeComment(commentId, userId) {
  const result = await runTransaction(reactionRef(commentId, userId), (current) => {
    if (current === null) return; // chưa like -> abort, không làm gì
    return null; // return null = xóa node
  });

  if (result.committed) {
    await safeIncrement(`comments/${commentId}/reactCount`, -1);
  }
  return result.committed;
}

export async function getUserReaction(commentId, userId) {
  const snap = await get(reactionRef(commentId, userId));
  return snap.exists() ? snap.val() : null;
}

export default {
  createComment,
  createReply,
  updateComment,
  deleteComment,
  subscribeToComments,
  subscribeToReplies,
  subscribeToUserReaction,
  likeComment,
  unlikeComment,
  getUserReaction,
};
