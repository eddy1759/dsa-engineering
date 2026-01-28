# LeetCode 35: Search Insert Position
# Url: https://leetcode.com/problems/search-insert-position/description
# Pattern: Binary Search (Lower Bound)
# Purpose: Boundary correctness
# Time: O(log n)

from typing import List

def search_insert(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return left

print(search_insert([1,3,5,6], 5))