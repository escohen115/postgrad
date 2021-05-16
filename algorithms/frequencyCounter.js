function same (arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let freq1 = {}
    let freq2 = {}
    for (let val of arr1){
        freq1[val] = ++freq1[val] || 1
    }
    for (let val of arr2){
        freq2[val] = ++freq2[val] || 1
    }

    for (let key in freq1){
        if (!(key**2 in freq2)){
            return false
        }
        if (freq1[key] !== freq2[key**2]){
            return false
        }
    }
    return true
}




same([1,6,3,6],[36,36,9,2])