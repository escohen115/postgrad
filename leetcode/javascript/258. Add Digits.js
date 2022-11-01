/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if (num < 10) return num

    let str = num.toString()
    
    let sum = 0

    while (str.length > 1){
        sum = 0
        for (let i of str){
            sum+= Number(i)
        }
        str = sum.toString()
    }
    

    return sum
};


