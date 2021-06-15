function bestTimeToBuyAndSell(prices){
    let profit = 0
    for (let i = 0; i < prices.length; i++){
       if (prices[i] < prices[i + 1]){
           profit += prices[i + 1] - prices[i]
       }
    }
    return profit
}
bestTimeToBuyAndSell([1,3,2,1,5])