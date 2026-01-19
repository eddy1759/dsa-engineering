/**
 * Leetcode 739: Daily Temperatures
 * URL: https://leetcode.com/problems/daily-temperatures
 * Pattern: Stack
 * Stack Type: Monotonic
 * Language: Typescript
 * Insight: Last unresolved element decides next action
 */

function dailyTemperatures(temps: number[]): number[] {
    const n = temps.length;
    const answer = new Array(n).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < n; i++) {
        while(stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()!;
            answer[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }

    return answer
}

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]
))