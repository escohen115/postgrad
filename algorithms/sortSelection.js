function selectionSort(arr){
    
    for (let i = 0; i < arr.length; i++){
        let min = arr[i]
        for (let j = i + 1; j < arr.length + 1; j++){
            if(arr[j] < min){
                min = arr[j]
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}


selectionSort([4,3,5,6,3,1,2])