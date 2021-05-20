function recursiveFib(num){
    if (num <= 2) return 1
    return recursiveFib(num-1) + recursiveFib(num-2)
}

recursiveFib(6)

