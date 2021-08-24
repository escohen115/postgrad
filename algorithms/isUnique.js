// with extra memory allocation

function isUnique (arr){
    let set = new Set(arr)
    if (set.size !== arr.length) return true
    return false
}


isUnique([1,2,3,3])


// no extra memory allocation

function isUnique (arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]) return false
        }
    }
    return true
}



