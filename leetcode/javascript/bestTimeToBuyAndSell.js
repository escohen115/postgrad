function bestTimeToBuyAndSell(prices){
    let profit = 0
    for (let i = 1; i < prices.length + 1; i++){
       if (prices[i] > prices[i - 1]){
           profit += prices[i] - prices[i - 1]
       }
    }
    return profit
}

bestTimeToBuyAndSell([1,3,2,1,5])