/**
 * DSA 1 – Two Sum
 * Patterns:
 *   1. Brute Force
 * Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * Constraints:
 *   - Exactly one solution exists
 *   - Cannot use the same element twice
 */

/** 
 * Pattern: Brute Force
 * Time: O(n^2)
 * Space: O(1)
 * Insight: Check every pair until sum equals target.
 */
function twoSumBrute(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}


const n = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
const t = n[0] + n[1];

// Benchmark Brute Force
console.time('TS Brute Force');
for (let i = 0; i < 10; i++) {
    twoSumBrute(n, t);
}
console.timeEnd('TS Brute Force');