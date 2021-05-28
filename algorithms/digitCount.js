function digitCount(n){
    // let place = 1
    // while (n > 9){
    //     n /= 10
    //     place ++
    // }
    // return place

    return Math.floor(Math.log10(Math.abs(n))) + 1
}


function getDigit (num, place){
    // let index = num.toString().length - place -1
    // let str = num.toString()
    // return parseInt(str[index])

    return (Math.floor(num) / Math.pow(10, i)) % 10
}



function mostDigits(arr){
    let max = -Infinity
    for (let i of arr){
        digitCount(i) > max ? max = digitCount(i) : null
    }
    return max
}
