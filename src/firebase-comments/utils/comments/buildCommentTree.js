// src/utils/comments/buildCommentTree.js
//
// Converts a flat array of comments (each with `id` + `parentId`) into a
// nested tree, in O(n) time using a single Map lookup pass instead of
// re-scanning the array for every node's children.

/**
 * @param {Array<Object>} comments - flat list, each item needs `id` and `parentId`
 * @returns {Array<Object>} root-level nodes, each with a `children` array
 */
export function buildCommentTree(comments) {
  if (!Array.isArray(comments) || comments.length === 0) return [];

  const nodeMap = new Map();
  const roots = [];

  // Pass 1: clone every comment into a tree node with an empty children array.
  // Cloning (not mutating the original objects) keeps this pure/predictable
  // for React state and memoization.
  for (const comment of comments) {
    nodeMap.set(comment.id, { ...comment, children: [] });
  }

  // Pass 2: attach each node to its parent's children array (or roots).
  for (const comment of comments) {
    const node = nodeMap.get(comment.id);
    if (comment.parentId && nodeMap.has(comment.parentId)) {
      nodeMap.get(comment.parentId).children.push(node);
    } else {
      // parentId is null, or the parent isn't in this slice (e.g. a reply
      // page loaded independently of its ancestor) -> treat as a root of
      // this particular render pass.
      roots.push(node);
    }
  }

  return roots;
}

export default buildCommentTree;
