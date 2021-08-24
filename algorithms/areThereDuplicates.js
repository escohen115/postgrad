// function areThereDuplicates(){
//    let freq = {}
//    for (let i = 0; i < arguments.length; i++){
//        if (freq[arguments[i]]){
//            return true
//        }
//        else{
//           freq[arguments[i]] = 1
//        }
//    }
//    return false
// }

function duplicates (arr){
    let set = new Set(arr)
    if (set.size !== arr.length) return true
    return false
}



duplicates([1,2,3,3])


// areThereDuplicates(1,2,2)


