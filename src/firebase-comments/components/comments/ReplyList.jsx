// src/components/comments/ReplyList.jsx
import React, { useState } from "react";
import useReplies from "../../hooks/comments/useReplies";
import { CommentSkeleton } from "./CommentSkeleton";
import { LoadMoreButton } from "./LoadMoreButton";
import { CommentItem } from "./CommentItem";

/**
 * Shows a "View N replies" toggle. Only when expanded does this component
 * mount `useReplies(commentId, true)`, which is what actually opens the
 * Firebase listener — collapsing unmounts/disables it again.
 */
export function ReplyList({ comment, currentUser, onReport }) {
  const [expanded, setExpanded] = useState(false);
  const { replies, loading, loadingMore, error, hasMore, loadMore } = useReplies(comment.id, expanded);

  const replyCount = comment.replyCount || 0;
  if (replyCount === 0 && !expanded) return null;

  return (
    <div className="cs-reply-list">
      {!expanded ? (
        <button type="button" className="cs-view-replies-btn" onClick={() => setExpanded(true)}>
          Xem {replyCount} phản hồi
        </button>
      ) : (
        <>
          <button type="button" className="cs-view-replies-btn" onClick={() => setExpanded(false)}>
            Ẩn phản hồi
          </button>

          {loading && replies.length === 0 && <CommentSkeleton count={Math.min(replyCount, 2)} />}

          {error && <div className="cs-error">Không thể tải phản hồi. Vui lòng thử lại.</div>}

          {replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} currentUser={currentUser} onReport={onReport} />
          ))}

          {hasMore && !loading && replies.length > 0 && (
            <LoadMoreButton onClick={loadMore} loading={loadingMore} label="Xem thêm phản hồi" />
          )}
        </>
      )}
    </div>
  );
}

export default ReplyList;
