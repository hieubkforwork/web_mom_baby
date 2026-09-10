// src/components/comments/CommentSection.jsx
import React, { useCallback } from "react";
import useComments from "../../hooks/comments/useComments";
import useCommentMutation from "../../hooks/comments/useCommentMutation";
import { CommentInput } from "./CommentInput";
import { CommentList } from "./CommentList";
import "./comments.css";

/**
 * Public API:
 *
 *   <CommentSection postId="post_001" currentUser={{ id, name, avatar }} />
 *
 * This is the only component consumers should need to import.
 */
export function CommentSection({ postId, currentUser, onReport }) {
  const { comments, loading, loadingMore, error, hasMore, loadMore } = useComments(postId);
  const { createComment, loading: submitting } = useCommentMutation();

  const handleSubmitRoot = useCallback(
    (content) => {
      if (!currentUser?.id) {
        return Promise.resolve({ ok: false, error: new Error("Bạn cần đăng nhập để bình luận.") });
      }
      return createComment({ postId, userId: currentUser.id, userName: currentUser.name, content });
    },
    [createComment, postId, currentUser]
  );

  return (
    <section className="cs-comment-section">
      <h3 className="cs-section-title">Bình luận</h3>

      <CommentInput
        placeholder={currentUser ? "Viết bình luận..." : "Đăng nhập để bình luận"}
        submitLabel="Bình luận"
        loading={submitting}
        onSubmit={handleSubmitRoot}
      />

      <CommentList
        comments={comments}
        loading={loading}
        loadingMore={loadingMore}
        error={error}
        hasMore={hasMore}
        loadMore={loadMore}
        currentUser={currentUser}
        onReport={onReport}
      />
    </section>
  );
}

export default CommentSection;
