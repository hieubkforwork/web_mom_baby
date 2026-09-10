// src/components/comments/CommentActions.jsx
import React, { useState, useRef, useEffect } from "react";

export function CommentActions({
  isOwner,
  reacted,
  reactCount,
  onToggleReaction,
  onReplyClick,
  onEditClick,
  onDeleteClick,
  onReportClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="cs-actions">
      {/* Reaction */}
      <button
        type="button"
        className={`cs-action-btn ${
          reacted ? "cs-action-btn--active" : ""
        }`}
        onClick={onToggleReaction}
        aria-label={reacted ? "Bỏ thích" : "Thích"}
      >
        <span className="cs-reaction-icon" aria-hidden="true">
          {reacted ? "♥" : "♡"}
        </span>
        <span className="cs-reaction-count">{reactCount ?? 0}</span>
      </button>

      {/* Reply */}
      <button
        type="button"
        className="cs-action-btn"
        onClick={onReplyClick}
      >
        Trả lời
      </button>

      {/* More */}
      <div className="cs-more-wrapper" ref={menuRef}>
        <button
          type="button"
          className="cs-action-btn"
          onClick={() => setMenuOpen((v) => !v)}
        >
          Khác
        </button>

        {menuOpen && (
          <div className="cs-more-menu">
            {isOwner ? (
              <>
                <button
                  type="button"
                  className="cs-more-menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    onEditClick();
                  }}
                >
                  Chỉnh sửa
                </button>

                <button
                  type="button"
                  className="cs-more-menu-item cs-more-menu-item--danger"
                  onClick={() => {
                    setMenuOpen(false);
                    onDeleteClick();
                  }}
                >
                  Xóa
                </button>
              </>
            ) : (
              <button
                type="button"
                className="cs-more-menu-item"
                onClick={() => {
                  setMenuOpen(false);
                  onReportClick();
                }}
              >
                Báo cáo
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CommentActions;