# LeetCode 33: Search in Rotated Sorted Array
# Url: https://leetcode.com/problems/search-in-rotated-sorted-array/
# Pattern: Binary Search with rotation
# Purpose: Conditional invariants
# Time: O(log n)

from typing import List

def search(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            return mid
        
        if nums[left] <= nums[mid]:
            if nums[left] <= target and target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target and target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
        
    return -1

print(search([4,5,6,7,0,1,2], 0))