
var sortArrayByParity = function(nums) {
    
    function swap (arr,a,b){
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    let swapIndex = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 == 0){
            swap(nums,i,swapIndex)
            swapIndex++
        }
    }
  return nums  
};