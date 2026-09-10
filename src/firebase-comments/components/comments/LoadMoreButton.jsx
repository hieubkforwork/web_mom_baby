// src/components/comments/LoadMoreButton.jsx
import React from "react";

export function LoadMoreButton({ onClick, loading, label = "Xem thêm" }) {
  return (
    <button type="button" className="cs-load-more" onClick={onClick} disabled={loading}>
      {loading ? "Đang tải..." : label}
    </button>
  );
}

export default LoadMoreButton;
