import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { CommentSection } from "../../firebase-comments/components/comments/CommentSection";
import { useLocalUser } from "../../firebase-comments/hooks/useLocalUser";

const ServiceComments = ({ foreignId }) => {
  const { t } = useLanguage();
  const { currentUser, name, setDisplayName, authLoading } = useLocalUser();
  const [inputValue, setInputValue] = useState(name);

  // Define postId using foreignId
  const postId = foreignId || "default-service";

  const handleReport = (commentId) => {
    console.log("Reported comment:", commentId);
    // You could integrate an API call here to report the comment to admins
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {!currentUser && !authLoading && (
        <div style={{ 
          marginBottom: "24px", 
          padding: "16px 20px", 
          backgroundColor: "#faf6f0", 
          borderRadius: "12px",
          border: "1px solid rgba(196, 181, 165, 0.3)"
        }}>
          <label 
            htmlFor="display-name" 
            style={{ 
              display: "block", 
              marginBottom: "8px", 
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "var(--clr-text-dark, #7a6b5a)"
            }}
          >
            {t("comments.subtitle") || "Nhập tên của bạn để bình luận:"}
          </label>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              id="display-name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ví dụ: Nguyễn Văn A"
              onKeyDown={(e) => {
                if (e.key === "Enter") setDisplayName(inputValue);
              }}
              style={{ 
                padding: "10px 14px", 
                borderRadius: "8px", 
                border: "1px solid rgba(196, 181, 165, 0.5)", 
                flex: 1,
                maxWidth: "300px",
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: "0.95rem"
              }}
            />
            <button
              onClick={() => setDisplayName(inputValue)}
              style={{
                padding: "10px 16px",
                backgroundColor: "#c89b8c",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem"
              }}
            >
              Xác nhận
            </button>
          </div>
        </div>
      )}

      <CommentSection 
        postId={postId} 
        currentUser={currentUser} 
        onReport={handleReport} 
      />
    </div>
  );
};

export default ServiceComments;

