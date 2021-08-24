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


// 8/24/21
function fmr (arr){
    let hash = {}
    let answer = 0
    let max = 0
    for (let i of arr){
        hash[i] ? hash[i] += 1 : hash[i] = 1
    }

    for (let i in hash){
        if (hash[i] > max){
            max = hash[i]
            answer = i
        }
    }
    return parseInt(answer)
}



fmr ([1,2,3,4,3,3,1])

