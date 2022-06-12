

function binarySearch(arr, val){
    let left = 0
    let right = arr.length-1
    let middle = Math.floor((right + left) / 2)
    while (left <= right && arr[middle] !== val){
        if (arr[middle] > val){
            right = middle -1
        }
        if (arr[middle] < val){
            left = middle +1
        }
        middle = Math.floor((right + left) / 2)
    }
    return arr[middle] === val ? middle :-1
}


binarySearch([1,2,3,4],4)