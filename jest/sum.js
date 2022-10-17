



function sum(a,b){
    return a + b
}

function subtract(a,b){
    return a-b
}

function cloneArray(arr){
    return[...arr]
}

function helper(){
    console.log('helper')
}

module.exports = {
    sum: sum,
    subtract: subtract,
    cloneArray: cloneArray
}

