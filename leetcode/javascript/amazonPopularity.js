








// given an integer of product ratings, return the x number of unique combinations greatest to least





function popularity(products, x){
    
    //divide and conquer. two pointers

    //to find the greatest possible combination we can add up every positive number in the array
    //to find the next greatest possible combination, we can add up every positive number in the array except for the smallest  
    //to find the next greatest possible combination, we can add up every positive number in the array except for the two smallest  

    let answer = []
    let bestCombo =[]
    for(let i=0;i<products.length;i++){
        if(products[i]>0){
            bestCombo.push(products[i])
        }
    }
    bestCombo.sort((a,b)=>a - b)
    answer.push(bestCombo)
    
    for (let i=1;i<x;i++){
        bestCombo = bestCombo.slice(1)    
        answer.push(bestCombo)
    }
    return answer

}


console.log(popularity([1,-2,-10,3,-4,5],3))