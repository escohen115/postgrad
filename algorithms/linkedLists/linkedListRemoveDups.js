function removeDups(list) {
    let cur = list.head
    let prev = null
    let set = new Set()
    while (cur){
        if (set.has(cur.value)){
            let elem = cur
            prev.next = cur.next
            cur = cur.next
            elem.next = null
        }
        else{
            set.add(cur.value)
            prev = cur
            cur = cur.next
        }
    }
    return list
}