/**
 * LeetCode 34: Find First and Last Position of Element in Sorted Array
 * Url: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description
 * Description: Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * Pattern: Binary Search (Lower + Upper Bound)
 * Purpose: Dual binary search
 * Time: O(log n)
 */


function searchRange(nums: number[], target: number): number[] {
    return [findFirst(nums, target), findLast(nums, target)]
}

function findFirst(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let result  = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid;
            right = mid -1
        } else if (nums[mid] <= target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
}

function findLast(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let result = -1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid
            left = mid + 1
        } else if(nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return result
}

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([], 0))