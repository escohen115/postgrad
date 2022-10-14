var removeElement = function(nums, val) {
    let total = nums.length
    for (let i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums[i] = Infinity
            total--
        }
    }
    nums.sort((a,b)=>a-b)
    return total
};
