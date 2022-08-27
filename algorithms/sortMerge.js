
// function mergeSort(arr){
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let arr1 = arr.slice(0,mid)
//     let arr2 = arr.slice(mid)
//     return merge (mergeSort(arr1), mergeSort(arr2))
// }


// mergeSort([6,3,2,1,4,5,0])


// function mergeSort(arr){
//     if (arr.length <= 1){
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let arr1 = arr.slice(0,mid)
//     let arr2 = arr.slice(mid)
    
//     return merge(mergeSort(arr1), mergeSort(arr2))  
// }



// function merge(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j])
//             j++;
//         }
//     }
//     while(i < arr1.length) {
//         results.push(arr1[i])
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j])
//         j++;
//     }
//     return results;
// }



// console.log(mergeSort([5,3,4,2,1]))
// console.log(merge([1,3,5,7,9],[2,4,6,8,10,12,14]))








//how does merge sort work? recursively break down an array until each array is of size 1, and thus sorted
//once the base case of array size 1 is hit, call a helperfunction to merge the sorted array portions until they are built up




function mergeTwoSortedArrays(arr1, arr2){
    let newArr = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }else{
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

// console.log(mergeTwoSortedArrays([1,2],[3,4]))

function mergeSort(arr){
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    
    return mergeTwoSortedArrays(mergeSort(left),mergeSort(right))
}

console.log(mergeSort([4,3,1,2]))



// console.log("hello")