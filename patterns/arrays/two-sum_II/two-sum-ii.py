
# LeetCode 167 – Two Sum II - Input Array Is Sorted
# Url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description
# Approach: Brute Force (Python)
# Pattern: Array Traversal (Baseline)
# Time: O(n²)
# Space: O(1)
# Insight: Serves as a correctness baseline; ignores constraints.

from typing import List

def two_sum_brute_force(numbers: List[int], target: int) -> List[int]:
    for i in range(len(numbers)):
        for j in range(i + 1, len(numbers)):
            if numbers[i] + numbers[j] == target:
                return [i + 1, j + 1] 
    return []


array = [2, 3, 4]
t = 6

print(f"Two Sum II (Brute Force): {two_sum_brute_force(array, t)}")