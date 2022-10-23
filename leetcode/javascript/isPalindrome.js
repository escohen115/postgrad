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


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let str = s.toLowerCase().split(" ").join(" ").replace(/[^a-z0-9]/gi, '')
    
    let i = 0
    let j = str.length -1
    
    while(i<=j){
        if(str[i] !== str[j]){
            return false
        }
        i++
        j--
    }
    return true
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
    function recurse(s){
        
        if(s.length === 1 || s.length === 0) return true
        
        if (s[0] === s[s.length-1]){
            return recurse(s.slice(1,s.length-1))
        }else{
            return false
        }
    }
    
    return recurse(str)
    
    
    
};