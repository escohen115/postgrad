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

// bad stuff ->


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


//good stuff ->

function partition(arr, start = 0, end = arr.length - 1) {
  function swap (arr, a, b){
     let temp = arr[a]
     arr[a] = arr[b]
     arr[b] = temp
  }

  // We are assuming the partition is always the first element
  let partition = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < partition) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the partition from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if (left < right){
        let partitionIndex = partition(arr, left, right) //3
        //left
        quickSort(arr,left,partitionIndex-1);
        //right
        quickSort(arr,partitionIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])



// quick sort pseudocode
// solved through recursion
// partition pseudocode
// iterate through array.length - 1 times
// take first item of array and move all items that are smaller to the left, larger to the right
// return index of sorted item
// 


function swap(arr,a,b){
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function partition(arr,start = 0, end = arr.length - 1){
    let x = arr[start]
    let index = start
    for (let i = index+1; i <= end; i++){
        if (arr[i])
    }
    
}