// src/components/comments/CommentSkeleton.jsx
import React from "react";

export function CommentSkeleton({ count = 3 }) {
  return (
    <div className="cs-skeleton-list" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div className="cs-skeleton-item" key={i}>
          <div className="cs-skeleton-avatar" />
          <div className="cs-skeleton-lines">
            <div className="cs-skeleton-line cs-skeleton-line--short" />
            <div className="cs-skeleton-line" />
            <div className="cs-skeleton-line cs-skeleton-line--medium" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentSkeleton;
