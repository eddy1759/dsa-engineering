/** 
 * LeetCode Problem: 643. Maximum Average Subarray I
 * Url: https://leetcode.com/problems/maximum-average-subarray-i/
 * Pattern: Sliding Window
 * Time: O(n)
 * Space: O(1)
 * Insight: Fixed-size sliding window to maintain the sum of the current subarray.
*/
function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0

    for (let i = 0; i < k; i++) {
        windowSum = windowSum + nums[i]
    }

    let maxSum = windowSum

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))