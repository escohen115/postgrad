function strMatch(haystack, needle){
    if (needle.length > haystack.length) return 0
     
    for (let i = 0; i < haystack.length; i++){
        let j = 0
        while (j < needle.length && needle[j] === haystack[i+j]){
            j += 1
        }
        if (j === needle.length){
            return i
        }
    } 

    return  -1
}


strMatch('hello','ll')