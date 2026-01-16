/** 
 * Leetcode Problem: 1754 - Largest Merge Of Two Strings
 * URL: https://leetcode.com/problems/largest-merge-of-two-strings/
 * Pattern: Greedy
 * Time: O(n + m)
 * Space: O(n + m)
 * Insight: Always choose the lexicographically larger option at each step.
 */
function largestMerge(word1: string, word2: string): string {
    let i = 0;
    let j = 0;
    let result = "";
    const n1 = word1.length;
    const n2 = word2.length;
    
    while(i < n1 || j < n2) {
        if (j === n2) {
            result += word1[i++]
        }
        else if (i === n1) {
            result += word2[j++]
        }
        else if (word1.slice(i) > word2.slice(j)) {
            result += word1[i++]
        } else {
            result += word2[j++]
        }
    }

    return result
}

console.log(largestMerge("cabaa", "bcaaa"))