/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let current = head
    let next = null
    
    while (current){
        next = current.next // save the next node in the list
        current.next = prev // reverse the connection
        prev = current //update prev to be current
        current = next //move current to the next node
    }
    return prev
};





function reverse(head){
    let prev = null
    let current = head
    let next = null
    while (current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}