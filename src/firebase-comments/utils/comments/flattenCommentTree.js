// src/utils/comments/flattenCommentTree.js
//
// Inverse of buildCommentTree — mostly useful for tests/debugging, or for
// flattening a tree back out before sending derived data elsewhere.

export function flattenCommentTree(tree) {
  const result = [];

  function walk(nodes) {
    for (const node of nodes) {
      const { children, ...rest } = node;
      result.push(rest);
      if (children && children.length) walk(children);
    }
  }

  walk(tree);
  return result;
}

export default flattenCommentTree;
