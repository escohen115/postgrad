








function remove (head, n){

    let left = head
    let right = head

    for (let i=0;i<n+1;i++){
        right = right.next
    }

    while(right !== null){
        right=right.next
        left = left.next
    }
    left.next = left.next.next
    
}