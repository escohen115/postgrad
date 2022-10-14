var maxSubArray = function(nums) {
    let max = Math.max(...nums)
    let cur = 0
    for (let i=0;i<nums.length;i++){
        cur += nums[i]
        max = Math.max(max,cur)
        if (cur < 0){
            cur = 0
        }
    }
    return max
};

 
