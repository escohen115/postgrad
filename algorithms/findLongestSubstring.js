function findLongestSubstring(str) {
  let j = 0
  let max = 0
  let seen = {}

  while (j < str.length){
    let cur = str[j]
    if(!(seen[cur])){
      seen[cur] = 1
      max = Math.max(max, Object.keys(seen).length)
      j++
    }
    else{
      delete seen[cur]
    }
  }
  return max
}
findLongestSubstring('abcadbfgh')

