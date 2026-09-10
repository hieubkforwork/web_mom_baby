// src/hooks/useLocalUser.js
//
// Web này chưa có hệ thống đăng nhập thật. Hook này giả lập "đăng nhập"
// bằng cách:
//   1. Sign-in anonymous vào Firebase Auth (im lặng, không cần form) để có
//      một `auth.uid` ổn định trên trình duyệt đó — đây chính là `userId`
//      dùng để ghi comment, và cũng là thứ Security Rules dựa vào để biết
//      "đây có đúng là chủ comment không".
//   2. Lưu tên hiển thị (display name) người dùng tự nhập vào localStorage.
//
// Không phải là auth thật (không mật khẩu, không đồng bộ nhiều thiết bị),
// chỉ đủ để demo hoạt động đúng và an toàn ở mức Security Rules.
//
// currentUser trả ra có dạng { id, name } — đúng format CommentSection
// đang mong đợi, nên KHÔNG cần đổi API của CommentSection.

import { useState, useEffect, useCallback } from "react";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const STORAGE_KEY = "cs_display_name";

export function useLocalUser() {
  const [uid, setUid] = useState(null);
  const [name, setName] = useState(() => localStorage.getItem(STORAGE_KEY) || "");
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        setAuthLoading(false);
      } else {
        // Chưa có phiên nào -> tạo phiên anonymous ngầm.
        signInAnonymously(auth).catch(() => setAuthLoading(false));
      }
    });
    return unsubscribe;
  }, []);

  const setDisplayName = useCallback((newName) => {
    const trimmed = newName.trim();
    localStorage.setItem(STORAGE_KEY, trimmed);
    setName(trimmed);
  }, []);

  // currentUser chỉ "sẵn sàng" khi đã có cả uid (auth) lẫn tên hiển thị.
  const currentUser = uid && name ? { id: uid, name } : null;

  return { currentUser, name, setDisplayName, authLoading };
}

export default useLocalUser;
