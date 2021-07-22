function fmr(n){
    let answer = null
    let hash = {}
    
    for (let i of n){
        hash[i] = ++hash[i] || 1
    }

    let freq = Math.max(...Object.values(hash))

    Object.keys(hash).forEach(function(key){
        if (hash[key]===freq){
            answer = key
        }
    })
    return answer    
}

fmr([3,4,4,4,4,4,6,6,6,1,1,4,4,6,6,6,6,6,6,6,6,6,6,6,6,4,4,4])



function fmr (arr) {

    let freq = {}
    let max = -Infinity
    let answer = null

    for (let i of arr){
        freq[i] ? freq[i] += 1 : freq[i] = 1
    }

    for (let i in freq){
        if (freq[i] > max ){
            max = freq[i]
            answer = i
        }
    }
    return parseInt(answer)
}