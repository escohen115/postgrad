function validAnagram (str1, str2){
    if (str1.length !== str2.length){
        return false
    }
    let freq1 = {}
    let freq2 = {}
    for (let char of str1){
        freq1[char] = ++freq1[char] || 1
    }
    for (let char of str2){
        freq2[char] = ++freq2[char] || 1
    }
    for (let key in freq1){
        if (!(key in freq2)){
            return false
        }
        if (freq1[key]!==freq2[key]){
            return false
        }
    }
    return true
    
}
validAnagram("texttwisttime","timetwisttext")