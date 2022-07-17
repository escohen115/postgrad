function pivot(arr, start=0, end=arr.length-1){
    function swap(arr,index1, index2){
        let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
    }

    let swapIndex = start
    let pivot = arr[start]

    for (let i=start+1;i<end;i++){
        if (arr[i] < pivot){ 
            swapIndex+=1 //if the element is less than the pivot, it needs to be moved to the left portion of the array.
                         //we keep track of how far left we need to go by incrementing swapIndex to always be the index 
                         //that's just to the right of the sorted portion. by swapping every element less than the pivot
                         //to this index, we build up a left sorted half, and a right sorted half
            swap(arr,swapIndex,i)
        }
    }
    swap(arr,start,swapIndex) //lastly, move the pivot to it's correct location
    return swapIndex
} 


function quickSort(arr,left = 0, right = arr.length-1){
    //recursively break down array into smaller arrays and perform pivot function on them 
    if (left < right){
        let pivotIndex = pivot(arr,left,right)
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
    return arr

}

console.log(quickSort([4,5,3]))