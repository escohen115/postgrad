function getDigit (num, place){
    let index = num.toString().length - place -1
    let str = num.toString()
    return parseInt(str[index])

    // return (Math.floor(num) / Math.pow(10, i)) % 10
}