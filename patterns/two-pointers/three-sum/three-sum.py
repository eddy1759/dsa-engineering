# Leetcode Problem 15: 3Sum
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.
# Pattern: Two Pointers + Sorting
# Time: O(n^2)
# Space: O(1)
# Insight: Fix one element, reduce to Two Sum on the remaining array.

from typing import List

def three_sum(nums: List[int]) -> List[List[int]]:
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i -1]:
            continue
        if nums[i] > 0:
            break
        
        left = i + 1
        right = len(nums) - 1
        
        while (left < right):
            sum = nums[i] + nums[left] + nums[right]
            
            if sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                while (left < right and nums[left] == nums[left + 1]):
                    left += 1
                while (left < right and nums[right] == nums[right - 1]):
                    right -= 1
                
                left += 1
                right -= 1
            elif sum < 0:
                left += 1
            else:
               right -= 1
    return result

print(f"Three sum with python: {three_sum([-1,0,1,2,-1,-4])}")