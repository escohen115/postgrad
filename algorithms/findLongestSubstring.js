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


// 8/24/21

function flss(s){
  let uniq = new Set()
  let max = 0
  let i = 0
  let j = 0
  
  while (i < s.length) {
      if (!uniq.has(s[i])){
          uniq.add(s[i])
          i++
          max = Math.max(max,uniq.size)
      }
      else{
          uniq.delete(s[j])
          j++
      }
  }
  return max
}




