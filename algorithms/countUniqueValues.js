function countUniqueValues(arr){
    let j = 1
    let i = 0
    while (i <= arr.length) {
        if (arr[j] === arr[i]){
          j++
        }
        if (arr[j] !== arr[i]){
            i++
            arr[i] = arr[j]
            j++
        }
    }
    return arr.slice(0,i)
}  
countUniqueValues([1,1,2,3,4,4,5,5,5,5,6,7,8,9])

// 8/23/21
function duplicates (arr){
    let set = new Set(arr)
    if (set.size !== arr.length) return true
    return false
}

