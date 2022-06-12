function longestCommonPrefix (strs) {
    let answer = ''
    
    for (let i = 0; i < strs[0].length; i++){
        let start = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] !== start){
                return answer
            }
            
            if (j === strs.length - 1){
                answer+=start
            }
            
        }
    }
    return answer   
}