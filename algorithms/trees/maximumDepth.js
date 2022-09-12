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
 * @return {number}
 */

//           1
//          / \
//         2   3
//        / \
//       4   5

// 1: ld = md(2) = 1
    
 
var maxDepth = function(node) {
    if (node == null) return 0;
    else{
        let lDepth = maxDepth(node.left);              
        let rDepth = maxDepth(node.right);
        return Math.max(lDepth, rDepth) + 1
    }
};