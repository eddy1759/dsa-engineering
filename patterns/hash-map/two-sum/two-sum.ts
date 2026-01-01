/**
 * DSA 1 – Two Sum
 * Patterns:
 *   2. Hash Map (Complement Lookup)
 * Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * Constraints:
 *   - Exactly one solution exists
 *   - Cannot use the same element twice
 */



/**
 * Pattern: Hash Map (Complement Lookup)
 * Time: O(n)
 * Space: O(n)
 * Insight: For each number, check if complement already seen in map.
 */
function twoSumHashMap(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (seen.has(complement)) {
            return [seen.get(complement)!, i];
        }

        seen.set(nums[i], i);
    }

    return [];
}

// Test
const numbers = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
const tag = numbers[0] + numbers[1];

console.time('TS Hash Map');
for (let i = 0; i < 10; i++) {
    twoSumHashMap(numbers, tag);
}
console.timeEnd('TS Hash Map');
