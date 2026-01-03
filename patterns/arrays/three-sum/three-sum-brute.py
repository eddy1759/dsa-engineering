# Leetcode Problem 15: 3Sum
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.
# Approach: Brute Force (Python)
# Pattern: Array Traversal (Baseline)
# Time Complexity: O(n^3)
# Space Complexity: O(1)
# Example:
# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]

from typing import List

def three_sum_brute_force(nums: List[int]) -> List[int]:
    results =  []
    seen = set()
    n = len(nums)
    
    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                if (nums[i] + nums[j] + nums[k] == 0):
                    triplets = sorted([nums[i], nums[j], nums[k]])
                    key = ",".join(map(str, triplets))
                    
                    if key not in seen:
                        seen.add(key)
                        results.append(triplets)
    return results

print(f"Three sum brute force with python: {three_sum_brute_force([-1,0,1,2,-1,-4])}")