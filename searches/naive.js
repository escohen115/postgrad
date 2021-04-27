
function naiveSearch(bigStr, str){
    let counter = 0
    for (let i = 0; i < bigStr.length; i++){
        if (bigStr[i] === str[0]){
            for(let j=0; j<str.length; j++){
                if (bigStr[i+j]!==str[j]){
                    break
                }
                if (j === str.length-1) {
                    counter ++
                }
            } 
        }
    }
    return counter
}

naiveSearch('thehahalolhaha','haha')