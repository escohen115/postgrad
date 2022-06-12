/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    
 let i = 0
  let j = 0
  let max = 0
  let seen = new Set()

  while (j < str.length){
    if(! ( seen.has(str[j]) ) ){
      seen.add(str[j])
      max = Math.max(max, seen.size)
      j++
    }
    else{
      seen.delete(str[i])
      i++
    }
  }
  return max
}

l