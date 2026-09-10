// src/hooks/comments/useReplies.js
//
// Loads + subscribes to replies of a single comment, but ONLY while
// `enabled` is true (i.e. the user has expanded "View replies"). This is
// what keeps Firebase listener count proportional to what's on screen
// instead of the whole (potentially huge) tree.

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import commentService from "../../services/firebase/commentService";
import { sortByCreatedAtAsc } from "../../utils/comments/commentHelpers";

const PAGE_SIZE = 5;

export function useReplies(commentId, enabled) {
  const [rawReplies, setRawReplies] = useState([]);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const unsubscribeRef = useRef(null);

  useEffect(() => {
    if (!enabled || !commentId) {
      // Collapsed (or no comment yet): make sure any previous listener is
      // torn down and reset pagination for next time it's expanded.
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
      setRawReplies([]);
      setLimit(PAGE_SIZE);
      return undefined;
    }

    setLoading(true);
    setError(null);

    unsubscribeRef.current = commentService.subscribeToReplies(
      commentId,
      limit,
      (replies) => {
        setRawReplies(replies);
        setHasMore(replies.length >= limit);
        setLoading(false);
        setLoadingMore(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
        setLoadingMore(false);
      }
    );

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentId, enabled, limit]);

  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setLimit((prev) => prev + PAGE_SIZE);
  }, [loadingMore, hasMore]);

  const replies = useMemo(() => sortByCreatedAtAsc(rawReplies), [rawReplies]);

  return { replies, loading, loadingMore, error, hasMore, loadMore };
}

export default useReplies;
