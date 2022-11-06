/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, num) {

    let counter = 0
    for (let i = 0;i<arr.length;i++){ 
        if (arr[i] === num){
            counter++
            arr[i] = Infinity
        }
    }
  arr.sort((a,b)=>a-b)
  return arr.length - counter
    
};


removeElement([1,2,3],1)