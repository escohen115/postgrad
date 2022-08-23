





function sqrt (n){
// a binary search repeatedly divides an array in half, looking for the correct value

let start = 0
let end = n
let mid = (start + end) / 2

    while(start <= end){
        // console.log(start,end)
        mid = Math.floor((start + end) / 2)

        if (mid * mid > n){
            end = mid -1
        }
        if (mid * mid < n){
            start = mid + 1
        }
        else if(mid*mid === n){
            return mid
        }
    }
    return mid
}


// console.log(sqrt(1000))

function binarySearch(arr,target){
    let start = 0
    let end = arr.length -1
    let mid = (start + end) / 2

    while(start < end){
        mid = Math.floor((start + end) / 2)
        if (arr[mid] < target){
            start = mid+1
        }
        if (arr[mid] > target){
            end = mid - 1
        }
        if (arr[mid] === target){
            return mid
        }
    }
    return -1
}

 


console.log(binarySearch([1,2,3,4,5],4))