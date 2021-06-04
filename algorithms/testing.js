
function findMinAndRemove(firstHalf, secondHalf){
 let minfirstHalf = firstHalf[0]
let minsecondHalf = secondHalf[0]

if(minfirstHalf < minsecondHalf){
return firstHalf.shift()
} else {
return secondHalf.shift()
}
}

let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemove(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted
}	


merge(firstHalf, secondHalf)