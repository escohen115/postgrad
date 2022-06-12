var isPalindrome = function(s) {
    let str = ''
    for (let char of s){
     (/[a-zA-Z0-9]/).test(char) ? str+=char.toLowerCase() : null
    }
    
    if (str.split("").reverse().join("") === str){
        return true
    }
    else{
        return false
    }    
};