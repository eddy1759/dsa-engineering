/** 
 * Leetcode Problem 15: 3Sum
 * URL: https://leetcode.com/problems/3sum/description
 * Description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Pattern: Two Pointers + Sorting
 * Time: O(n²)
 * Space: O(1)
 * Examples:
 * * Input: nums = [-1,0,1,2,-1,-4]
 * * Output: [[-1,-1,2],[-1,0,1]]
 * Insight: Fix one element, reduce to Two Sum on the remaining array.
*/
function threeSum(nums: number[]): number[][] {
    const sortedArr = [...nums].sort((a, b) => a - b)


    const results: number[][] = [];

    for (let i = 0; i < sortedArr.length - 2; i++) {
        if ( i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

        if (sortedArr[i] > 0) break;

        let left = i + 1;
        let right = sortedArr.length - 1;

        while (left < right) {
            const sum  = sortedArr[i] + sortedArr[left] + sortedArr[right];

            if (sum === 0) {
                results.push([sortedArr[i], sortedArr[left], sortedArr[right]])
                while(left < right && sortedArr[left] === sortedArr[left + 1]){
                    left++;
                }
                while(left < right && sortedArr[right] === sortedArr[right - 1]){
                    right--;
                }
                left++;
                right--;
            } else if ( sum < 0) {
                left++
            } else {
                right--
            }
        }

    }
    return results

}

console.log("Three sum in typescript: ", threeSum([-1,0,1,2,-1,-4]))