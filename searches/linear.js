function searchLinear(arr, val){
    for (let i=0;i<arr.length;i++){
        if (arr[i] === val){
            return true
        }
    }
    return false
}

searchLinear(['a','b','c'], 'c')