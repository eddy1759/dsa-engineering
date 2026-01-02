/**
 * LeetCode 167 – Two Sum II (Input Array Is Sorted)
 * Url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description
 * Pattern: Two Pointers
 * Time: O(n)
 * Space: O(1)
 * Insight: Sorted array enables shrinking search space from both ends.
 *
 * Note:
 * This is the optimized variant of the brute-force Two Sum
 * found under patterns/arrays/two-sum_ii.
 */

function twoSumPointer(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right]

        if (sum === target) {
            return [left + 1, right + 1];
        }

        if (sum > target) {
            right--
        } else {
            left++
        }
    }
    return []
}

const a1 = [2,7,11,15], t1 = 9
console.log(`Two Sum II (Two Pointer) - Input [${a1}], Taregt ${t1} - Output [1,2]: `, twoSumPointer(a1, t1))