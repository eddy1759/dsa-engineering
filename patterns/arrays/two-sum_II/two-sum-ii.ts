/**
 * LeetCode 167 – Two Sum II - Input Array Is Sorted
 * Url: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description
 * Approach: Brute Force (Typescript)
 * Pattern: Array Traversal (Baseline)
 * Time: O(n²)
 * Space: O(1)
 * Insight: Serves as a correctness baseline; ignores constraints.
 */
function twoSumBruteForce(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i+1, j+1]
            }
        }
    }
    return []
}

const arr1 = [2,7,11,15], target1 = 9
const arr2 = [2,3,4], target2 = 6
const arr3 = [-1,0], target3 = -1

console.log(`Two Sum II (Brute Force) - Input [${arr1}], Taregt ${target1} - Output [1,2]: `, twoSumBruteForce(arr1, target1))
console.log(`Two Sum II (Brute Force) - Input [${arr2}], Taregt ${target2} - Output: [1,3]: `, twoSumBruteForce(arr2, target2))
console.log(`Two Sum II (Brute Force) - Input [${arr3}], Taregt ${target3} - Output [1,2]: `, twoSumBruteForce(arr3, target3))


