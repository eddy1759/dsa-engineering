# Leetcode 739: Daily Temeprature
# URL: https://leetcode.com/problems/daily-temperatures
# Pattern: Stack
# Stack Type: Monotonic

from typing import List 


def daily_temperatures(temperatures: List[int]) -> List[int]:
    n = len(temperatures)
    answer = [0] * n
    stack = []
    
    for i in range(n):
        while stack and temperatures[i] > temperatures[stack[-1]]:
            prev_index = stack.pop()
            answer[prev_index] = i - prev_index
            
        stack.append(i)
        
    return answer

print(daily_temperatures([73,74,75,71,69,72,76,73]))