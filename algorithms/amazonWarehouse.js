





function countProducts (s){
    let total = 0
    let counter = 0
    let status = "stop"
    
    function toggle (){
        status = status === "start" ? "stop" : "start"
    }
    for (let i=0;i<s.length;i++){
        
        if (s[i]==="|"){
            toggle()   
        }
        if (status === "start" && s[i] === "*"){
            counter++
        }
        else if (status === "stop"){
            toggle()   
            total+=counter
            counter=0
        }
        // console.log(i,status)
    }
    return total
}

console.log(countProducts("||*|**|*"))


function merge(arr1,arr2){
    let newArr = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }
        else{
            newArr.push(arr2[j])
            j++
        }
    }
    if (i < arr1.length){
        while(i < arr1.length){
            newArr.push(arr1[i])
            i++
        }

    }
    if (j < arr2.length){
        while(j < arr2.length){
            newArr.push(arr2[j])
            j++
        }
    }
    return newArr
}

// console.log(merge([1,3,5],[2,4]))


function mergeSort(arr){
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    return merge(mergeSort(arr1),mergeSort(arr2))
}



// console.log(mergeSort([3,4,2,1,5]))