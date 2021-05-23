function removeDuplicatesFromSortedArray(nums){
  let i = 0 
  let j = 0

  while (j < nums.length){
    
    if (nums[j] === nums[i]){
      j++
    }
    else{
      i++
      nums[i] = nums[j]
      j++
    }
  }
  return nums.slice(0,i+1)
}

removeDuplicatesFromSortedArray([1,1,2,3])