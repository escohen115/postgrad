//  Given a string, write a function to check if it is a permutation of a palin­ drome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. 
// The palindrome does not need to be limited to just dictionary words.


function palindromePermutation(str){
    let str1 = str.split(' ').join('').toLowerCase()
    let h = {}
    for (let i of str1){
        h[i] ? h[i] += 1 : h[i] = 1
    }

    if (str1.length % 2 === 0){
        for (let i in h){
            if (h[i] % 2 !== 0) return false
        }
        return true
    }

    if (str1.length % 2 !== 0){
        let odds = 0
        for (let i in h){
            if (h[i] % 2 !== 0){
                odds+=1
                if (odds > 1){
                    return false
                }
            }
        }
        return true
    }
}


// palindromePermutation('Tact Coa')


function palindome(s){
    if (s.length <= 1 ){
        // console.log("true")
      return true
    }
    if(s[0] === s[s.length-1]){
      return palindome(s.slice(1,s.length-1))
    }else{
        // console.log("false")
      return false
    }
}

console.log(palindome("amanaplanalolanalpanama"))