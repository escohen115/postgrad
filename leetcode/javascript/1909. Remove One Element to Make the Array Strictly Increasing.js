/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
    let arr = []
    
    // function that checks if nums is in order, will nums be in increasing order?
    function check(arr){
        let sortedCopy = [...arr].sort((a,b)=>a-b)
        let j = 0
        for (let i=0;i<arr.length;i++){
            if (sortedCopy[i] !== arr[i]) {
                console.log(14)
                return false
            }
            if (i >= 1){
                if (!(arr[i] > arr[j])){
                    console.log(16)
                    return false
                }
                j++
            }
        }
        return true
    }

    for (let i=0;i<nums.length;i++){
        arr = [...nums]
        arr.splice(i,1)
        console.log(arr)
        if (check(arr) === true){
            return true
        }
    }
    return false


};