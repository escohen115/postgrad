function maxSubarraySum(arr, num){
    let maxSum = 0
    let temp = 0
    for (let i=0;i<num;i++){
        maxSum+=arr[i]
    }
    console.log(maxSum)
    tempSum=maxSum
    for (let i=num;i<arr.length;i++){
        tempSum = tempSum-arr[i-num]+arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

maxSubarraySum([1,2,3,4,2,5,1,2,6,7,3,3],4)