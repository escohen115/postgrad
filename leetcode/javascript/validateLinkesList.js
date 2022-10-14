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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let data = []
    function traverse (root){
        if (root.left) traverse(root.left)
        data.push(root.val)
        if (root.right) traverse(root.right)
    }
    traverse(root)
    let prev = data[0]
    
    for (let i=1;i<data.length;i++){
        if (data[i] <= prev){
            return false
        }
        prev = data[i]
    }
    
    console.log(data)
    return true
};
