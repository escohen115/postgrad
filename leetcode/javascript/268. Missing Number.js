/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //naive solution O(n^2)
    // for(let i=0;i<nums.length+1;i++){ 
    //     if(nums.indexOf(i) === -1 ){
    //         return i
    //     }
    // }
    //better solution Olog(n)
    nums.sort((a,b)=>(a-b))
    console.log(nums)
    if (nums[0]!==0) return 0
    else{
        let prev = 0
        for(let j=1;j<nums.length+1;j++){
            if(!nums[j]) return prev+1
            if(nums[j] - nums[prev] !== 1) return nums[j]-1
            prev++
        }
    }


};