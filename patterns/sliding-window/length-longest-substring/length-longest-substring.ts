/** 
 * Leetcode Problem: 3. Longest Substring Without Repeating Characters
 * Url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Pattern: Sliding Window
 * Time: O(n)
 * Space: O(min(m, n)) where m is the size of the character set and n is the length of the string.
 * Insight: Use a sliding window to track the current substring without repeating characters.
 * 
 * Example:
 * Input: s = "abcabcbb"
 * Output: 3
*/

function lengthOfLongestSubstring(s: string): number {
    let seen = new Set<string>();
    let left = 0;
    let maxLen = 0

    for (let right = 0; right < s.length; right++) {
        while(seen.has(s[right])) {
            seen.delete(s[left]);
            left++
        }
        seen.add(s[right])
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}

console.log(lengthOfLongestSubstring("abcabcbb"))