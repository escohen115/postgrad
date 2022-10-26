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
var deleteDuplicates = function(head) {
    if (head === null) return head

    let answer = head
    let prev = head
    let current = prev.next

    while (current){
        if(current.val !== prev.val){
            prev.next = current
            prev = current
        }
        console.log(prev.val,current.val) // 3,3  .next === null
        current = current.next
        if(current === null){
            prev.next = current
        }
    }
  return answer
};


//two pointers
//when the right pointer encounters a node with a value different than left,
//the left pointers .next will be updated to the node of the right pointer
//the left pointer will be updated to point at what right is pointing at
