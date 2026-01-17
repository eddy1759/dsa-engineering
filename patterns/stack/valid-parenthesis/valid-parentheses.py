# Leetcode 20: Valid Parentheses
# URL: https://leetcode.com/problems/valid-parentheses/
# Pattern: Stack
# Time Complexity: O(n)
# Space Complexity: O(n)
# Insight: Use stack to track opening brackets and ensure they are properly closed.

def is_valid(s: str) -> bool:
    stack = []
    pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    for c in s:
        if c in pairs:
            if not stack or stack.pop() != pairs[c]:
                return False
        else:
            stack.append(c)
    
    return len(stack) == 0


print(is_valid("()[]{}"))