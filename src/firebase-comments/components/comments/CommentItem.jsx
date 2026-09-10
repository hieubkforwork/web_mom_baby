// src/components/comments/CommentItem.jsx
import React, { useState, useCallback } from "react";
import useCommentReaction from "../../hooks/comments/useCommentReaction";
import useCommentMutation from "../../hooks/comments/useCommentMutation";
import { CommentInput } from "./CommentInput";
import { CommentActions } from "./CommentActions";
import { ReplyList } from "./ReplyList";
import { isEdited, isDeleted, formatRelativeTime } from "../../utils/comments/commentHelpers";

/**
 * Render 1 comment. Đệ quy xảy ra qua <ReplyList>, chỉ mount thêm
 * <CommentItem> khi người dùng bấm "Xem phản hồi" (xem ReplyList.jsx).
 */
export function CommentItem({ comment, currentUser, onReport }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const isLoggedIn = Boolean(currentUser?.id);

  const { reacted, toggleReaction } = useCommentReaction(comment.id, currentUser?.id);
  const { createReply, updateComment, deleteComment, loading: mutating } = useCommentMutation();

  const isOwner = isLoggedIn && currentUser.id === comment.userId;
  const deleted = isDeleted(comment);

  // Chặn mọi action cần đăng nhập ở một chỗ duy nhất, tránh lặp code và
  // tránh gọi currentUser.id khi currentUser có thể null.
  const requireLogin = useCallback(() => {
    if (!isLoggedIn) {
      window.alert("Vui lòng nhập tên để bình luận/tương tác.");
      return false;
    }
    return true;
  }, [isLoggedIn]);

  const handleToggleReaction = useCallback(() => {
    if (!requireLogin()) return;
    toggleReaction();
  }, [requireLogin, toggleReaction]);

  const handleReplyClick = useCallback(() => {
    if (!requireLogin()) return;
    setIsReplying((v) => !v);
  }, [requireLogin]);

  const handleReplySubmit = useCallback(
    async (content) => {
      if (!requireLogin()) return { ok: false, error: new Error("Chưa đăng nhập.") };
      const result = await createReply({
        postId: comment.postId,
        parentId: comment.id,
        userId: currentUser.id,
        userName: currentUser.name,
        content,
      });
      if (result.ok) setIsReplying(false);
      return result;
    },
    [requireLogin, createReply, comment.postId, comment.id, currentUser]
  );

  const handleEditSubmit = useCallback(
    async (content) => {
      const result = await updateComment(comment.id, content);
      if (result.ok) setIsEditing(false);
      return result;
    },
    [updateComment, comment.id]
  );

  const handleDelete = useCallback(() => {
    if (window.confirm("Xóa bình luận này?")) {
      deleteComment(comment.id);
    }
  }, [deleteComment, comment.id]);

  return (
    <div className="cs-comment-item">
      <div className="cs-avatar">{(comment.userName || comment.userId || "?").slice(0, 1).toUpperCase()}</div>

      <div className="cs-comment-body">
        <div className="cs-comment-bubble">
          <div className="cs-comment-header">
            <span className="cs-comment-author">{deleted ? "" : comment.userName || "Ẩn danh"}</span>
          </div>

          {deleted ? (
            <p className="cs-comment-deleted">Bình luận này đã bị xóa.</p>
          ) : isEditing ? (
            <CommentInput
              placeholder="Chỉnh sửa bình luận..."
              submitLabel="Lưu"
              autoFocus
              loading={mutating}
              onSubmit={handleEditSubmit}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <p className="cs-comment-content">{comment.content}</p>
          )}
        </div>

        {!deleted && !isEditing && (
          <div className="cs-comment-meta">
            <span className="cs-comment-time">{formatRelativeTime(comment.createdAt)}</span>
            {isEdited(comment) && <span className="cs-comment-edited"> · đã chỉnh sửa</span>}
          </div>
        )}

        {!deleted && !isEditing && (
          <CommentActions
            isOwner={isOwner}
            reacted={reacted}
            reactCount={comment.reactCount || 0}
            onToggleReaction={handleToggleReaction}
            onReplyClick={handleReplyClick}
            onEditClick={() => setIsEditing(true)}
            onDeleteClick={handleDelete}
            onReportClick={() => onReport && onReport(comment.id)}
          />
        )}

        {isReplying && (
          <div className="cs-reply-input">
            <CommentInput
              placeholder={`Đang trả lời ${comment.userName || "người này"}...`}
              submitLabel="Trả lời"
              autoFocus
              loading={mutating}
              onSubmit={handleReplySubmit}
              onCancel={() => setIsReplying(false)}
            />
          </div>
        )}

        <ReplyList comment={comment} currentUser={currentUser} onReport={onReport} />
      </div>
    </div>
  );
}

export default CommentItem;
