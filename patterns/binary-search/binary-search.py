# LeetCode 704: Binary Search
# Url: https://leetcode.com/problems/binary-search
# Pattern: Pattern: Binary Search
# Purpose: Mechanics + invariants
# Time: O(log n)

from typing import List

def search(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return - 1

print(search([-1,0,3,5,9,12], 9))