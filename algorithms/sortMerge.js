function sortMerge(arr1, arr2){
    let res = []
    let x = 0
    let y = 0
    
    while (x < arr1.length && y < arr2.length){
        if (arr1[x] < arr2[y]){
            res.push(arr1[x])
            x++
        }
        else{
            res.push(arr2[y])
            y++
        }
    }

    if (x < arr1.length){
        res.push(...arr1.slice(x,arr1.length))
    }
    if (y < arr2.length){
        res.push(...arr2.slice(y,arr2.length))
    }

    return res
}


sortMerge([1],[2,4,6])