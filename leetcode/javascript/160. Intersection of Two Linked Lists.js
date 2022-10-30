/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // we know the length of the intersection will be the same
    // so we can adjust the shorter list to begin at the same as the longer
    let list1len = 0
    let list2len = 0
    let i = headA
    let j = headB
    while(i){
        i = i.next
        list1len ++
    }
    while (j){
        j = j.next
        list2len ++
    }
    let shorterList = null
    
    if (list1len <= list2len){
        shorterList = headA
        longerList = headB
    }else{
        shorterList = headB
        longerList = headA
    }

    let difference = Math.abs(list1len - list2len)

    console.log(shorterList)

    for(let i=0;i<difference;i++){
        longerList = longerList.next 
    }
    console.log(difference, shorterList, longerList)

    while(shorterList && longerList){
        // console.log(shorterList, longerList)
        if (shorterList === longerList){
            return shorterList
        }
        shorterList = shorterList.next
        longerList = longerList.next
    }
    return null

};