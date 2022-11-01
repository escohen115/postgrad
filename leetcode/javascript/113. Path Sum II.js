/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (!root) return []
    let res = []

    function traverse(root, targetSum, paths){
        
        paths.push(root.val)

        if (!root.left && !root.right && targetSum - root.val === 0){
            res.push(paths)
        } 
        if (root.left){
            traverse(root.left, targetSum - root.val, [...paths])
        }
        if (root.right){
            traverse(root.right, targetSum - root.val, [...paths])
        }
    }

    traverse(root,targetSum,[])

    return res


};