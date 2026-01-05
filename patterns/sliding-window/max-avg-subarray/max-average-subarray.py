# Leetcode Problem: 643. Maximum Average Subarray I
# Url: https://leetcode.com/problems/maximum-average-subarray-i/
# Pattern: Sliding Window
# Time: O(n)
# Space: O(1)y
# Insight: Fixed-size sliding window to maintain the sum of the current subarray.

from typing import List

def find_max_average(nums: List[int], k: int) -> float:
    windowSum = maxSum = 0
    
    for i in range(k):
        windowSum += nums[i]
        
    for i in range(k, len(nums)):
        windowSum = windowSum + nums[i] - nums[i - k]
        maxSum = max(maxSum, windowSum)
        
    return float(maxSum / k)

print(find_max_average([1, 12, -5, -6, 50, 3], 4))