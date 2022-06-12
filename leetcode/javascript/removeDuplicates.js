function removeDuplicates (nums) {
    
    let i = 0
    let j = 1
    
    while (j < nums.length + 1){
        if (nums[j] === nums[i]){
            j++
        }
        else{
            i++
            nums[i] = nums[j]
            j++
        }
        
    }
    return i
    
}