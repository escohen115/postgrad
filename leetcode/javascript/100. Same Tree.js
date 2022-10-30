/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if (p===null && q===null) return true
    if (p && !q || q && !p) return false
    
    function recurse(head){
        data1.push(head.val)
        if (head.left) recurse(head.left)
        if (head.right) recurse(head.right)
        else{
            data1.push(null)
        }
    }
    
    let data1 = []
    recurse(p)

    function recurse2(root){
        data2.push(root.val)
        if (root.left) recurse2(root.left)
        if (root.right) recurse2(root.right)
        else{
            data2.push(null)
        }
    }

    let data2 = []
    recurse2(q)

    // console.log(p,q)
    console.log(data1,data2)

    for(let i=0;i<data1.length;i++){
        // console.log(data1[i],data2[i])

        if(data1[i] !== data2[i]) return false
    }

    return true

    

};