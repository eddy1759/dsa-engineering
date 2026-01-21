# Leetcode 84: Largest Rectangle in Histogram
# Leetcode 84: Largest Rectangle in Histogram
# Pattern: Stack
# Stack Type: Monotonic

from typing import List

def largestRectangleArea(heights: List[int]) -> int:
    maxArea = 0
    stack = []
    
    heights.append(0)
    
    for i in range(len(heights)):
        while len(stack) > 0 and heights[i] < heights[stack[- 1]]:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1

            maxArea = max(maxArea, height * width)
        
        stack.append(i)
        
    return maxArea

print(largestRectangleArea([2,1,5,6,2,3]))
print(largestRectangleArea([2,4]))