function targetSum(arr, target){
    let left = 0
    let right = arr.length-1
    while (left<right){
        if (arr[left]+arr[right]==target){
            return([arr[left],arr[right]])
        }
        if (arr[left]+arr[right]>target){
            right--
        }
        if (arr[left]+arr[right]<target){
            left++
        }
    }
    return false 
}

targetSum([-1,0,2,3], 1)