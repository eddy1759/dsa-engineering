/** 
 * Leetcode Problem: 20. Valid Parentheses
 * URL: https://leetcode.com/problems/valid-parentheses/
 * Pattern: Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * Insight: Use stack to track opening brackets and ensure they are properly closed.
 */

function isValid(s: string): boolean {
    const stack: string[] = [];

    const pairs: Record<string, string> = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const c of s) {
        if (c in pairs) {
            const top = stack.pop();
            if (top !== pairs[c]) {
                return false
            }
        } else {
            stack.push(c)
        }
    }

    return stack.length === 0
}

console.log(isValid("()[]{}"))