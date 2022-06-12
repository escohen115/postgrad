var intersect = function(nums1, nums2) {
    let answer = []
    
    let hash1 = {}
    let hash2 = {}
    
    for (let i = 0; i < nums1.length; i++){
        let num = nums1[i]
        hash1[num] ? hash1[num] += 1 : hash1[num] = 1 
    }
    for (let i = 0; i < nums2.length; i++){
        let num2 = nums2[i]
        hash2[num2] ? hash2[num2] += 1 : hash2[num2] = 1 
    }
 
    
    for (let key in hash1){
        if (hash2[key]){
            for (let i = 0; i < Math.min(hash2[key], hash1[key]); i++) {
                answer.push(key)
            }
        }
    }
    
    return answer
    
};