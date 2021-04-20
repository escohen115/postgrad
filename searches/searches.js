function searchLinear(arr, val){
    for (let i=0;i<arr.length;i++){
        if (arr[i] === val){
            return true
        }
    }
    return false
}

searchLinear(['a','b','c'], 'c')

function naiveSearch(bigStr, str){
    let counter = 0
    for (let i=0;i<bigStr.length;i++){
        if(bigStr[i] === str[0]){
            for(let j=0; j<str.length; j++){
                if (bigStr[i+j]!==str[j]){
                    break
                }
                if (j === str.length-1) {
                    counter ++
                }
            } 
        }
    }
    return counter
}

naiveSearch('thehahalolhaha','haha')

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