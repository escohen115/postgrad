/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let idx = 0
    let i = 0
    if (strs.length===1) return strs[0]

    while (i<strs.length){
        if (compare(strs[0][idx], strs.slice(1), idx)===false){
            return strs[0].slice(0,idx)
        }
        else if (compare(strs[0][idx], strs.slice(1), idx)===true){
            i++
            idx++
        }
        if(idx === strs[0].length){
            return strs[0].slice(0,idx)
        }
    }
    
    function compare(val, arr, index){
        for (let i=0;i<arr.length;i++){
            if (arr[i][index] !== val) return false
        }
        return true
    }

    
};
