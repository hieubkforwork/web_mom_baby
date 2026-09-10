// src/hooks/comments/useComments.js
//
// Loads + subscribes to root comments for a post, with "Load more" pagination.
//
// Implementation choice: rather than stacking multiple Firebase listeners
// (one per page), we keep ONE realtime listener whose `limitToLast` window
// grows each time the user clicks "Load more". This keeps exactly one
// active subscription per post regardless of how many pages are loaded,
// which matters for the "avoid unnecessary listeners" requirement.

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import commentService from "../../services/firebase/commentService";
import { sortByCreatedAtDesc } from "../../utils/comments/commentHelpers";

const PAGE_SIZE = 20;

export function useComments(postId) {
  const [rawComments, setRawComments] = useState([]);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const unsubscribeRef = useRef(null);

  useEffect(() => {
    if (!postId) return undefined;

    setLoading(true);
    setError(null);

    unsubscribeRef.current = commentService.subscribeToComments(
      postId,
      limit,
      (comments) => {
        setRawComments(comments);
        setHasMore(comments.length >= limit); // full window came back -> likely more exist
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
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId, limit]);

  const loadMore = useCallback(() => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setLimit((prev) => prev + PAGE_SIZE);
  }, [loadingMore, hasMore]);

  // Active comments feed is naturally realtime-ordered by push key; present
  // newest-first for a typical feed UX.
  const comments = useMemo(() => sortByCreatedAtDesc(rawComments), [rawComments]);

  return { comments, loading, loadingMore, error, hasMore, loadMore };
}

export default useComments;
