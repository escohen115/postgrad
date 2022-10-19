/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let s = new Set()
    let hash = {}
    let i = head
    if (i === null) return false
    while (i){
        if (i.next === null) return false
        if (s.has(i)){
            return true
        }else{
            s.add(i)
        }

        i = i.next
    }


}; 