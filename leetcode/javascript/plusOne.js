/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 1,10,100,1000
    //sum. the array
    // iterate through the array
    // if i start from the end, i'll set my place variable to be digits.length. on each iteration of i, i'll multiply it by ten
    
    // let tensPlace = 1
    // let total = 0
    // for (let i=digits.length-1;i>=0;i--){
    //     total+=(tensPlace*digits[i])
    //     tensPlace *= 10
    // }
    // total+=1
    // console.log(total)
    // return total.toString().split('')
    
    //start from the end and add one to the last column, so long as the value is not 9.
    //if it is 9, change it to a zero, and add one to the previous index, then perform the check,
    //the base case is the number is under 9, or the index is 0, in which case unshift a 1
    
    
    
    let x = []
    
    
    const nineCheck = function (arr,i){
        console.log(arr,i)
        if (arr[i] < 9){
            arr[i] += 1
            x = arr
            return
        }
        if (i == 0){
            arr[i] = 0
            arr.unshift(1)
            console.log(arr)
            x = arr
            return
        }
        else{
            arr[i] = 0
            nineCheck(arr,i-1)
        }   
    }
    nineCheck(digits,digits.length-1)
    return(x)
    
   
};