function getDigit (num, place){
    let index = num.toString().length - place -1
    console.log(index)
    let str = num.toString()
    console.log(str)
    return parseInt(str[index])
}