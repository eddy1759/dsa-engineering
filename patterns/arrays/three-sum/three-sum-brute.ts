/** 
 * Leetcode Problem 15: 3Sum
 * URL: https://leetcode.com/problems/3sum/description
 * Description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Approach: Brute Force (Typescript)
 * Pattern: Array Traversal (Baseline)
 * Time: O(n³)
 * Space: O(1)
 * Examples:
 * * Input: nums = [-1,0,1,2,-1,-4]
 * * Output: [[-1,-1,2],[-1,0,1]]
 * Insight: Serves as a correctness baseline; ignores constraints.
*/

function threeSumBruteForce(nums: number[]): number[][] {
    const results: number[][]= []
    const seen = new Set<string>()
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplets = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    const key = triplets.join(',');

                    if (!seen.has(key)) {
                        seen.add(key)
                        results.push(triplets)
                    }
                }
            }
        }
    }
    return results
}

console.log("Three sum brute force with typescript: ", threeSumBruteForce([-1,0,1,2,-1,-4]))