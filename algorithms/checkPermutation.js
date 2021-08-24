function checkPermutation (str1, str2){
    let h1 = {}
    let h2 = {}

    for (let i of str1){
        h1[i] ? h1[i] += 1 : h1[i] = 1
    }

    for (let i of str2){
        h2[i] ? h2[i] += 1 : h2[i] = 1
    }

    for (let i in h1){
        if (h1[i] !== h2[i]) return false
    }

    return true

}


checkPermutation('mymom','mommy')