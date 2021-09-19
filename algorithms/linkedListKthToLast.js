// untested
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

const kthToLast = (list, k) => {
    let left = list.head
    let right = list.head

    for (let i = 0; i < k; i++){
        if (left === null || right === null) return null
        right = right.next 
    }

    while (right !== null){
        right = right.next
        left = left.next
    }
    return left
} 

