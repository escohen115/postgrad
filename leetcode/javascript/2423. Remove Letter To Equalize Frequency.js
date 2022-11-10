/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {

    // if (new Set(word).size === word.length/2) return false
    // if (new Set(word).size === word.length) return true

    let hash = {}
    for (let i of word){
        hash[i] ? hash[i]++ : hash[i]=1
    }

    let highestFrequency = Math.max(...Object.values(hash))
    let lowestFrequency = Math.min(...Object.values(hash))
    let highestFrequencyChar = ""
    let lowestFrequencyChar = ""
    for (let i in hash){
        if (hash[i] === highestFrequency) highestFrequencyChar = i
    }
    for (let i in hash){
        if (hash[i] === lowestFrequency) lowestFrequencyChar = i
    }
    
    let checkTwo = true
    let checkThree = true

    
    //check one - the highest frequency character must only repeat once more than every other character
    let arr = [...Object.values(hash)]
    arr.splice(arr.indexOf(highestFrequency),1)
    let i = 0
    while(i<arr.length){
        if (highestFrequency - arr[i] === 1){
            i++
        }else{
            break
        } 
    }
    console.log(i)
    if (i === arr.length) return true
    
    arr = [...Object.values(hash)]
    arr.splice(arr.indexOf(lowestFrequency),1)

    //check two - the lowest frequency character must only repeat once less than every other character
    i = 0
    while(i<arr.length){
        if (arr[i] - lowestFrequency  === 1){
            i++
        }else{
            break
        } 
    }
    if (i === arr.length) return true

    //check three - if there are two letters, and one appears more than once, and other only appears once
    arr = [...Object.values(hash)]
    if (Object.keys(hash).length === 2){
        if (highestFrequency !== lowestFrequency){
            for (let i of arr){
                if (i === 1) {
                    checkThree = false
                } 
            }
        }
    }
    
    //check four - one letter
    if (Object.keys(hash).length === 1){
        return true
    }

    //check five - all unique letters
    if (Object.values(hash).reduce((partialSum, a)=>partialSum + a, 0) === Object.keys(hash).length){
        return true
    }

    //check six - all characters appear the same number of times
    arr = [...Object.values(hash)]
    let comp = arr
    let flag = true
    for (let i of arr){
        if (i !== comp) flag = false
    }    
    if (!flag) return false

    console.log(checkThree)


    // return checkOne || checkTwo
    return false    

};


//determine the occurences of every character
//determine if there's only one character that: 
//repeats just once more than every other or 
//just once less or
//only appears once in conjunction with one other letter