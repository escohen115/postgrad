var mergeTwoLists = function(l1, l2) {
    
    
    let list = new ListNode()
    let head = list
    
    while(l1 && l2){
        if(l1.val<l2.val){
            head.next = l1
            l1=l1.next
        }
        else{
            head.next=l2
            l2=l2.next
        }
        head=head.next
    }
    if (l1 || l2){
        head.next = l1 ? l1 : l2    
    }
    return list.next
};