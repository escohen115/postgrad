
function kthToLast(list,k){
    let start = list.head
    let listLength = 0
    while (start.next !== null){
        start = start.next
        listLength += 1
    }
    let k = list.head
    for (let i = 0; i < (listLength - k); i++){
        k = k.next
    }
    return k
}

