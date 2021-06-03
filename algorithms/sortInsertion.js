function sortInsertion(arr){
    for (let i = 1; i < arr.length; i++){
        let current = arr[i]
        for (let j = i - 1; j >= 0; j--){
            let compare = arr[j]
            if (compare < current){
                let temp = arr[j + 1]
                arr[j + 1] = current
                arr[i] = temp
            }
        }    
        
    }
    return arr
}

sortInsertion([3,1,4,2])


[1,3,4,2]
    