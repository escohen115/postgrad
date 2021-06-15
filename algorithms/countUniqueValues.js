function countUniqueValues(arr){
    let j = 0
    let i = 1
    while(i <= arr.length){
        if(arr[i] === arr[j]){
          i++
        }
        if (arr[i] !== arr[j]){
            j++
            arr[j] = arr[i]
            i++
        }
    }
    return arr.slice(0,j)
}  
countUniqueValues([1,1,2,3,4,4,5,5,5,5,6,7,8,9])
 