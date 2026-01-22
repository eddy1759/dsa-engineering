/**
 * Leetcode 84: Daily Largest Rectangle in Histogram
 * https://leetcode.com/problems/largest-merge-of-two-strings/
 * Pattern: Stack
 * Stack Type: Monotonic
 * Language: Typescript
 * Insight: Last unresolved element decides next action
 */
function largestRectangleArea(heights: number[]): number {
    const stack: number[] =  [];
    let maxArea = 0;
    const n = heights.length;

    heights.push(0)

    for (let i = 0; i < n; i++) {
        while(stack.length > 0 && heights[i] > heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()!];

            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width)
        }

        stack.push(i)
    }
    return maxArea
};

