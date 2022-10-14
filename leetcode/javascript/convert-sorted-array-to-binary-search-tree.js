var sortedArrayToBST = function(nums) {
  return _sortedArrayToBST(nums, 0, nums.length)
};

function _sortedArrayToBST (nums, start, end) {
  if (start >= end) { return null }

  const mid = start + Math.floor((end - start) / 2)
  const node = new TreeNode(nums[mid])
  node.left = _sortedArrayToBST(nums, start, mid)
  node.right = _sortedArrayToBST(nums, mid + 1, end)

  return node
}
