
# LeetCode 167 – Two Sum II (Input Array Is Sorted)
# Url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description
# Pattern: Two Pointers (Python)
# Time: O(n)
# Space: O(1)
# Insight: Sorted array enables shrinking search space from both ends.

# Note:
# This is the optimized variant of the brute-force Two Sum
# found under patterns/arrays/two-sum_ii.

from typing import List

def two_sum_pointer(numbers: List[int], target: int) -> List[int]:
    left = 0
    right = len(numbers) - 1
    
    while(left < right):
        sum = numbers[left] + numbers[right]
        
        if (sum == target):
            return [left + 1, right + 1]
        
        if (sum > target):
            right -= 1
        else:
            left += 1
    
    return []

print(f" Two Sum II: {two_sum_pointer([2,7,11,15], 9)}")