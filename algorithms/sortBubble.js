function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--){
        let noSwaps = true
        for (let j=0; j < i-1; j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }    
        }
        if(noSwaps) break
    }
    return arr
}

bubbleSort([3,2,78,23,4,-1,0,34,15,12,5])
