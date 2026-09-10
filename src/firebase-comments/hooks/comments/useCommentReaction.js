// src/hooks/comments/useCommentReaction.js
//
// Tracks the current user's like state on a comment, and exposes an
// optimistic toggle: the UI flips instantly, and rolls back if the
// underlying transaction fails (e.g. offline, permission denied).
// `reactCount` itself is fed by realtime subscription on the parent
// comment (see CommentItem), so this hook only owns the "did I like this"
// bit + the mutation.

import { useState, useEffect, useCallback, useRef } from "react";
import commentService from "../../services/firebase/commentService";

export function useCommentReaction(commentId, userId) {
  const [reacted, setReacted] = useState(false);
  const [loading, setLoading] = useState(false);
  const pendingRef = useRef(false);

  useEffect(() => {
    if (!commentId || !userId) return undefined;
    const unsubscribe = commentService.subscribeToUserReaction(commentId, userId, (reaction) => {
      // Don't clobber an in-flight optimistic update with a stale readback.
      if (!pendingRef.current) setReacted(Boolean(reaction));
    });
    return unsubscribe;
  }, [commentId, userId]);

  const toggleReaction = useCallback(async () => {
    if (!userId || loading) return;

    const nextState = !reacted;
    pendingRef.current = true;
    setReacted(nextState); // optimistic flip
    setLoading(true);

    try {
      const committed = nextState
        ? await commentService.likeComment(commentId, userId)
        : await commentService.unlikeComment(commentId, userId);

      if (!committed) {
        // Transaction aborted (e.g. double-tap race) -> resync to server truth.
        setReacted(!nextState);
      }
    } catch (err) {
      setReacted(!nextState); // rollback on failure
    } finally {
      pendingRef.current = false;
      setLoading(false);
    }
  }, [commentId, userId, reacted, loading]);

  return { reacted, toggleReaction, loading };
}

export default useCommentReaction;
