function pivot (arr, comp){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < arr[comp]){
            count++
            swap(arr, i, count)   
        }
    }
    swap(arr, comp, count )
    console.log(arr)
    return count
}


function swap (arr, i1, i2){
    let temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
    return arr
}


function sort(arr){
    for (let i = 0; i < arr.length; i++){
        pivot(arr, i)
    }
    return arr
}


pivot ([3,1,2,4], 0)




function pivotHelper(arr){
    let pivotIndex = Math.floor(arr.length / 2)
    let comp = arr[pivotIndex]
    let lessThan = 0

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < comp){
            lessThan ++
        }    
    }
    let temp = arr[lessThan]
    arr[lessThan] = arr[pivotIndex]
    arr[pivotIndex] = temp
    return pivotIndex
}


function quickSort(arr){
    for (let i = 0; i < arr.length; i++){
        pivotHelper(arr)
    }
    return arr
}

quickSort([0,9,7,8,34,3,2,4,1,5])