/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    
    
    function recursion(intervals){
        let res = []
        let anyMatches = false
        
        if (intervals.length === 1) return intervals
        intervals.sort((a,b)=>a[0]-b[0])

        for (let i=0;i<intervals.length;i++){
            let a = intervals[i]
            let intervalFound = false

            for(let j=i+1;j<intervals.length;j++){
                let b = intervals[j]
                if (b[0] <= a[1]){ //if an overlap is found, merge the two intervals together
                    res.push([a[0], (b[1] > a[1] ? b[1] : a[1] ) ])
                    intervals[j] = [] //make sure to remove that interval from the array to not add it again
                    intervalFound = true
                    anyMatches = true
                    // console.log(anyMatches)
                }
            }

            if (!intervalFound){ //push the interval we're comparing against as is
                res.push(a)
            }
        }
        
        for (let i=0;i<res.length;i++){  //remove all intervals that empty (i.e have been previously merged)
            if (res[i].length === 0){
                res.splice(i,1)
            }
        }    
            
        if (anyMatches) recursion(res)

        else{
            console.log(res)
            return res
        }
       
    }
    // console.log( recursion(intervals))

    return recursion(intervals)

    
};


merge ( [[1,3],[2,6],[8,10],[15,18]] )