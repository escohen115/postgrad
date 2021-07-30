function merge(arr1, arr2){
    let i = 0
    let j = 0
    let res = []

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            res.push(arr1[i])
            i++
        }
        if (arr1[i] > arr2[j]){
            res.push(arr2[j])
            j++
        }
    }
    if (i < arr1.length){
        res.push(...arr1.slice(i))
    }
    if (j < arr2.length){
        res.push(...arr2.slice(i))
    }
    return res
}


function mergeSort(arr){
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    return merge (mergeSort(arr1), mergeSort(arr2))
}


mergeSort([6,3,2,1,4,5,0])


