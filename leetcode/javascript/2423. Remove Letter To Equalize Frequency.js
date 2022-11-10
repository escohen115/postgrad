/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {

    let hash = {}
    for (let i of word){
        hash[i] ? hash[i]++ : hash[i]=1
    }

    let highestFrequency = Math.max(...Object.values(hash))
    let lowestFrequency = Math.min(...Object.values(hash))
    
    
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
    if (i === arr.length) {
        console.log(43)
        return true
    }

    //check two - if all letters appear the same number of times except for one letter, if that letter only appears once, return true
    if (lowestFrequency === 1){
        arr = [...Object.values(hash)]
        arr.splice(arr.indexOf(lowestFrequency),1)
        
        i = 0
        let comp = arr[0]
        while(i<arr.length){
            if (arr[i] === comp){
                i++
            }else{
                break
            } 
        }
        if (i === arr.length) {
            console.log(57)
            return true
        }

    }
    return false    

};