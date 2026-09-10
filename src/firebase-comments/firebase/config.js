// src/firebase/config.js
//
// Central Firebase initialization. Import `db` anywhere you need
// Realtime Database access. Never call initializeApp() more than once.

import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY ?? process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN ?? process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env?.VITE_FIREBASE_DATABASE_URL ?? process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID ?? process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET ?? process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID ?? process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env?.VITE_FIREBASE_APP_ID ?? process.env.REACT_APP_FIREBASE_APP_ID,
};

// Avoid "Firebase App named '[DEFAULT]' already exists" during HMR/tests.
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Web này chưa có hệ thống đăng nhập thật. Ta dùng Firebase Anonymous Auth
// để mỗi trình duyệt có một `auth.uid` ổn định (bắt buộc phải có auth.uid
// thì Security Rules mới chặn được ai được sửa/xóa/react comment nào).
// Người dùng chỉ cần nhập TÊN hiển thị — xem hooks/useLocalUser.js.
export const auth = getAuth(app);
