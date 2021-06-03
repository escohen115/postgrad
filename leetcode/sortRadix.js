function getDigit (num, place){
//     let index = num.toString().length - place -1
//     let str = num.toString()
//     return parseInt(str[index])

    return 
}

getDigit(12345,4)

function digitCount(n){
    let place = 1
    while (n > 9){
        n /= 10
        place ++
    }
    return place
}

digitCount(1000)

function mostDigits(arr){
    let max = -Infinity
    for (let i of arr){
        digitCount(i) > max ? max = digitCount(i) : null
    }
    return max
}

mostDigits([123,1,22224])