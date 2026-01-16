# Leetcode Problem: 1754 - Largest Merge Of Two Strings
# URL: https://leetcode.com/problems/largest-merge-of-two-strings/
# Pattern: Greedy
# Time: O(n + m)
# Space: O(n + m)
# Insight: Always choose the lexicographically larger option at each step.
def largest_merge(word1: str, word2: str) -> str:
    i = 0
    j = 0
    result = ''
    
    while i < len(word1) or j < len(word2):
        if j == len(word2):
            result += word1[i]
            i += 1
        
        elif i == len(word1):
            result += word2[j]
            j += 1
        
        elif word1[i:] > word2[j:]:
            result += word1[i]
            i += 1
        else:
            result += word2[j]
            j += 1
    
    return result

print(largest_merge("cabaa", "bcaaa"))