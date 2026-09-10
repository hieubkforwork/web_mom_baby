// src/components/comments/CommentInput.jsx
import React, { useState, useCallback } from "react";
import { MAX_COMMENT_LENGTH, validateCommentContent } from "../../utils/comments/commentHelpers";

/**
 * Reusable input for both root comments (parentId=null) and replies
 * (parentId=comment.id). The parent decides which mutation to call via
 * `onSubmit`, keeping this component free of Firebase knowledge.
 */
export function CommentInput({
  placeholder = "Viết bình luận...",
  submitLabel = "Bình luận",
  autoFocus = false,
  loading = false,
  onSubmit,
  onCancel,
}) {
  const [value, setValue] = useState("");
  const [localError, setLocalError] = useState(null);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationError = validateCommentContent(value);
      if (validationError) {
        setLocalError(validationError);
        return;
      }
      setLocalError(null);
      const result = await onSubmit(value);
      if (result?.ok !== false) {
        setValue("");
      } else if (result?.error) {
        setLocalError(result.error.message || "Không thể gửi bình luận.");
      }
    },
    [value, onSubmit]
  );

  return (
    <form className="cs-input-form" onSubmit={handleSubmit}>
      <textarea
        className="cs-input-textarea"
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        maxLength={MAX_COMMENT_LENGTH}
        onChange={(e) => setValue(e.target.value)}
        rows={onCancel ? 2 : 3}
        disabled={loading}
      />
      {localError && <div className="cs-input-error">{localError}</div>}
      <div className="cs-input-actions">
        {onCancel && (
          <button type="button" className="cs-btn cs-btn--ghost" onClick={onCancel} disabled={loading}>
            Hủy
          </button>
        )}
        <button type="submit" className="cs-btn cs-btn--primary" disabled={loading || !value.trim()}>
          {loading ? "Đang gửi..." : submitLabel}
        </button>
      </div>
    </form>
  );
}

export default CommentInput;
