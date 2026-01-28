# LeetCode 34: Find First and Last Position of Element in Sorted Array
# Url: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description
# Description: Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
# If target is not found in the array, return [-1, -1].
# Pattern: Binary Search (Lower + Upper Bound)
# Purpose: Dual binary search
# Time: O(log n)

from typing import List

def search_range(nums: List[int], target: int) -> List[int]:
    return [find_first(nums, target), find_last(nums, target)]


def find_first(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            result = mid
            right = mid - 1
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result
        
        
def find_last(nums: List[int], target: int) -> int:
    left = 0
    right = len(nums) - 1
    result = -1
    
    while left <= right:
        mid = (left + right) // 2
        
        if nums[mid] == target:
            result = mid
            left = mid + 1
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return result

print(search_range([5,7,7,8,8,10], 8))
print(search_range([5,7,7,8,8,10], 6))
print(search_range([], 0))