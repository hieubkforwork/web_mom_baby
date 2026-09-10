// src/hooks/comments/useCommentMutation.js
//
// Wraps commentService write operations with loading/error state so
// components don't need try/catch boilerplate everywhere. Because root and
// reply feeds are realtime-subscribed, we don't need manual optimistic
// cache patching here — Firebase's local write cache already reflects the
// change instantly on the writer's own client (onValue fires immediately
// with the pending local value before the server ack). We still expose
// `loading`/`error` so the UI can disable buttons / show retry affordances.

import { useState, useCallback } from "react";
import commentService from "../../services/firebase/commentService";
import { validateCommentContent } from "../../utils/comments/commentHelpers";

export function useCommentMutation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runMutation = useCallback(async (fn) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fn();
      setLoading(false);
      return { ok: true, data: result };
    } catch (err) {
      setError(err);
      setLoading(false);
      return { ok: false, error: err };
    }
  }, []);

  const createComment = useCallback(
    ({ postId, userId, userName, content }) => {
      if (!userId) return Promise.resolve({ ok: false, error: new Error("Vui lòng đăng nhập để bình luận.") });
      const validationError = validateCommentContent(content);
      if (validationError) return Promise.resolve({ ok: false, error: new Error(validationError) });
      return runMutation(() =>
        commentService.createComment({ postId, userId, userName, content: content.trim() })
      );
    },
    [runMutation]
  );

  const createReply = useCallback(
    ({ postId, parentId, userId, userName, content }) => {
      if (!userId) return Promise.resolve({ ok: false, error: new Error("Vui lòng đăng nhập để trả lời.") });
      const validationError = validateCommentContent(content);
      if (validationError) return Promise.resolve({ ok: false, error: new Error(validationError) });
      return runMutation(() =>
        commentService.createReply({ postId, parentId, userId, userName, content: content.trim() })
      );
    },
    [runMutation]
  );

  const updateComment = useCallback(
    (commentId, content) => {
      const validationError = validateCommentContent(content);
      if (validationError) return Promise.resolve({ ok: false, error: new Error(validationError) });
      return runMutation(() => commentService.updateComment(commentId, content.trim()));
    },
    [runMutation]
  );

  const deleteComment = useCallback(
    (commentId) => runMutation(() => commentService.deleteComment(commentId)),
    [runMutation]
  );

  return { createComment, createReply, updateComment, deleteComment, loading, error };
}

export default useCommentMutation;
