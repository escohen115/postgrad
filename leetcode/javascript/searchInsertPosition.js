var searchInsert = function(nums, target) {
    if (nums.indexOf(target) > -1){
        return nums.indexOf(target)
    } 
    else{
        for (let i=0;i<nums.length;i++){
            if (nums[i] < target && nums[i+1] > target){
                return i+1
            }
        }
        return nums[0] > target ? 0 : nums.length
    }
    
};