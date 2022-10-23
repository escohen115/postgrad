/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let map1 = {}
    let map2 = {}
    
    nums1.forEach(num=>map1[num] ? map1[num]++ : map1[num] = 1)
    nums2.forEach(num=>map2[num] ? map2[num]++ : map2[num] = 1)
    
    let overlap = []
    
    Object.keys(map1).forEach(key=>{
        if(map2[key]){
            for(let i=0;i< Math.min(map2[key], map1[key]);i++){
                overlap.push(key)    
            }
        }
    })
    
    return overlap  
};