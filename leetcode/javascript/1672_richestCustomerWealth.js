var maximumWealth = function(accounts) {
    let max = 0
    for (let i=0;i<accounts.length;i++){
        let sum = 0
        for (let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j]
        }
        sum > max ? max = sum : null
    }
    return max
    
};