// function checkPermutation (str1, str2){
//     let h1 = {}
//     let h2 = {}

//     for (let i of str1){
//         h1[i] ? h1[i] += 1 : h1[i] = 1
//     }

//     for (let i of str2){
//         h2[i] ? h2[i] += 1 : h2[i] = 1
//     }

//     for (let i in h1){
//         if (h1[i] !== h2[i]) return false
//     }

//     return true

// }
































// checkPermutation('mymom','mommy')


function checkPerm (str1, str2){

    let answer = true

    let map1 = {}
    let map2 = {}

    Array.from(str1).forEach(char=>map1[char] ? map1[char]+=1 : map1[char] = 1)
    Array.from(str2).forEach(char=>map2[char] ? map2[char]+=1 : map2[char] = 1)

    Object.keys(map1).forEach(key=>{
        if(map1[key] !== map2[key]){
            answer = false
        }
    })

    Object.keys(map2).forEach(key=>{
        if(map2[key] !== map1[key]){
            answer = false
        }
    })


    return answer

}

console.log(checkPerm('mydffamom','momadffmy'))