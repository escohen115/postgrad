function oneAway(str1, str2){
   
    let long = str1.length > str2.length ? str1 : str2
    let short = str1.length <= str2.length ? str1 : str2

    if (long.length - short.length > 1) return false 

    let change = 0


    for (let i = 0, j = 0; i < long.length || j < short.length; i++, j++){
        if (long[i] !== short[j]){
            change += 1
            if (change > 1) return false
            if (long[i + 1] === short[j]){
                i++
            }
        }
    }
    return true
}



oneAway('blake','lake')
oneAway('pale','ple')


