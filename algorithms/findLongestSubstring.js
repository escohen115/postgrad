function findLongestSubstring(str) {
  let i = 0
  let j = 0
  let max = 0
  let seen = {}

  while (j < str.length){
    if(!(seen[str[j]])){
      seen[str[j]] = 1
      max = Math.max(max, Object.keys(seen).length)
      j++
    }
    else{
      delete seen[str[i]]
      i++
    }
  }
  return max
}
findLongestSubstring('abcadbfgh')

