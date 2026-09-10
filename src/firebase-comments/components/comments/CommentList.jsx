// src/components/comments/CommentList.jsx
import React, { useMemo } from "react";
import { CommentItem } from "./CommentItem";
import { CommentSkeleton } from "./CommentSkeleton";
import { LoadMoreButton } from "./LoadMoreButton";
import { buildCommentTree } from "../../utils/comments/buildCommentTree";

export function CommentList({ comments, loading, loadingMore, error, hasMore, loadMore, currentUser, onReport }) {
  // Root feed only ever contains root comments (parentId === null) by
  // construction (see commentService `rootOf` query), so buildCommentTree
  // here just wraps each into a `{ ...comment, children: [] }` node shape
  // consistent with the rest of the tree utilities. Actual reply nesting is
  // rendered lazily by <ReplyList> inside each <CommentItem>, not here.
  const tree = useMemo(() => buildCommentTree(comments), [comments]);

  if (loading && comments.length === 0) {
    return <CommentSkeleton count={4} />;
  }

  if (error) {
    return <div className="cs-error">Không thể tải bình luận. Vui lòng thử lại.</div>;
  }

  if (!loading && comments.length === 0) {
    return <div className="cs-empty">Chưa có bình luận nào. Hãy là người đầu tiên!</div>;
  }

  return (
    <div className="cs-comment-list">
      {tree.map((comment) => (
        <CommentItem key={comment.id} comment={comment} currentUser={currentUser} onReport={onReport} />
      ))}
      {hasMore && <LoadMoreButton onClick={loadMore} loading={loadingMore} label="Xem thêm bình luận" />}
    </div>
  );
}

export default CommentList;
