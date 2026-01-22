# Leetcode 121: Best Time to Buy and Sell Stock
# Url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock
# Pattern: Greedy

from typing import List

def max_profit(prices: List[int]) -> int:
    min = prices[0]
    profit = 0
    
    for i in range(len(prices)):
        if prices[i] < min:
            min = prices[i]
        
        profit = max(profit, prices[i] - min)
        
    return profit

print(max_profit([7,1,5,3,6,4]))
print(max_profit([4]))