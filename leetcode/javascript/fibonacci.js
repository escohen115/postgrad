function fibo(n){
    let current = 1
    let prev = 1
    let arr = [0,1,1]

    for (let i=0;i<n;i++){
        console.log(prev,current)

        arr.push(current+prev)
        
        let temp = current

        current = prev + current

        prev = temp
        

    }

return(arr)

}

// console.log(fibo(6))


function recurseFibo(n){
    if (n === 0) return 0
    if (n === 1 || n === 2) return 1
    else{
        return recurseFibo(n-1) + recurseFibo(n-2)
    }
}
let arr = []
for(let i=0;i<25;i++){
    arr.push(recurseFibo(i))
}
console.log(arr)

// console.log(recurseFibo(3))