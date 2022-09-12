// untested
let partition = (list, k) => {
    let list1 = null
    let list2 = null

    let elem = list.head

    while (elem.next !== null){
        if (elem < k){
            list1.push(elem)
        }
        else{
            list2.push(elem)
        }
        elem = elem.next
    }
    list1.tail.next = list2.head
    
}
