function merge(arr1,arr2){
    let i = 0
    let j = 0
    let newArr = []
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else{
            newArr.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length){
        newArr.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        newArr.push(arr2[j])
        j++
    }
    return newArr
}


function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    return merge(mergeSort(arr.slice(0,mid)),mergeSort(arr.slice(mid)))
}

// console.log(merge([1,3,5],[2,4,]))
// console.log(mergeSort([4,3,2,-89]))



function merge(arr1, arr2){
    let ma = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            ma.push(arr1[i])
            i++
        }
        else{
            ma.push(arr2[j])
            j++
        }
    }
    if (i < arr1.length){
        ma.push(...arr1.slice(i))
    }
    if (j < arr2.length){
        ma.push(...arr2.slice(j))
    }
    return ma
}
// console.log(merge([1,3,5],[2,4,]))

function mergeSort(arr){
    let mid = Math.floor(arr.length/2)

    if (arr.length <=1){
        return arr
    }
    return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid,arr.length)))
}

console.log(mergeSort([4,3,2,-89]))
