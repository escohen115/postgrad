// for every old index of i, the new index of i is i+k % arr.length 
    // create a new array
    let map = {}
    
    for(let i=0;i<nums.length;i++){
        map[(i+k) % nums.length] = nums[i]
    }
    let newArr = []
    Object.keys(map).forEach(key=>newArr.push(map[key]))
    
    for(let i=0;i<nums.length;i++){
        nums[i] = newArr[i]
    }
    