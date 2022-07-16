
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) { //compare each element with the "pivot", in this case the first array element
    if (arr[i] < pivot) { //track how many values are less than it, so we can swap the pivot to be the last of them
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
console.log (quickSort([100,-3,2,4,6,9,1,2,5,3,23]))




// [4,6,9,1,2,5,3]
// first element less than the pivot is 1. increase the swap index from 0 to 1. swap 6 (at the swap index) with 1 (at i)
// [4,1,9,6,2,5,3]
// next, 2 is less than 4. increase the swap index from 1 to 2. swap 9 (at the swap index) with 2 (at i)
// [4,1,2,6,9,5,3]
// next, 3 is less than 4. increase the swap index from 2 to 3. swap 6 (at the swap index) with 3 (at i)
// [4,1,2,3,9,5,6]
// next, now that we've finished our for loop, swap the pivot (found at the start) with the swap index
// [3,1,2,4,9,5,6]



// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
