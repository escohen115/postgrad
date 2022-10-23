var singleNumber = function(nums) {
    for (let i = 0; i < nums.length; i++){

        let num = nums[i]
        let count = 1

        for (let j = 0; j < nums.length; j++){
            if (j === i) continue
            if (nums[j] === num) {
                count ++               
            }
        }

        if (count === 1) return num
    }
    
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let map = {}
    nums.forEach(num=>{
        if(map[num]){
            map[num]++
        }else{
            map[num] =1
        }
    })
    return Object.keys(map).filter(key=>map[key]===1)[0]
    
};
