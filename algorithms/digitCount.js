function digitCount(n){
    let place = 1
    while (n > 9){
        n /= 10
        place ++
    }
    return place
}

digitCount(1000)