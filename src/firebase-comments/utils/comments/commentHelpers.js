// src/utils/comments/commentHelpers.js

export const MAX_COMMENT_LENGTH = 2000;

/**
 * Validates raw comment input before it ever reaches Firebase.
 * Returns an error message string, or null if valid.
 */
export function validateCommentContent(content) {
  if (typeof content !== "string") return "Nội dung không hợp lệ.";
  const trimmed = content.trim();
  if (trimmed.length === 0) return "Bình luận không được để trống.";
  if (trimmed.length > MAX_COMMENT_LENGTH) {
    return `Bình luận không được vượt quá ${MAX_COMMENT_LENGTH} ký tự.`;
  }
  return null;
}

export function isEdited(comment) {
  return Boolean(comment.updatedAt && comment.updatedAt !== comment.createdAt);
}

export function isDeleted(comment) {
  return comment.status === "deleted";
}

/**
 * Snapshot object -> array of {id, ...value} entries.
 * Firebase RTDB returns objects keyed by push id; this normalizes them
 * into arrays that are easier to sort/render/memoize in React.
 */
export function snapshotToArray(snapshotVal) {
  if (!snapshotVal) return [];
  return Object.entries(snapshotVal).map(([id, value]) => ({ id, ...value }));
}

/**
 * Comments come back from Firebase ordered by push-key (chronological)
 * ascending. Root feed traditionally displays newest first.
 */
export function sortByCreatedAtDesc(comments) {
  return [...comments].sort((a, b) => b.createdAt - a.createdAt);
}

export function sortByCreatedAtAsc(comments) {
  return [...comments].sort((a, b) => a.createdAt - b.createdAt);
}

export function formatRelativeTime(timestamp) {
  const diffMs = Date.now() - timestamp;
  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return "vừa xong";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} phút trước`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} giờ trước`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} ngày trước`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} tuần trước`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} tháng trước`;
  const years = Math.floor(days / 365);
  return `${years} năm trước`;
}
