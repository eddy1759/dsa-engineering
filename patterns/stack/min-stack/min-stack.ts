/** 
 * Leetcode 155: Min Stack
 * URL: https://leetcode.com/problems/min-stack/
 * Pattern: Stack
 * Time: O(1) for each operation
 * Space: O(n)
 * Insight: Use an auxiliary stack to keep track of the minimums.
*/

class MinStack {
    private main: number[];
    private mins: number[];

    constructor() {
        this.main = [];
        this.mins = []
    }

    push(val: number): void {
        this.main.push(val);

        if (this.mins.length === 0) {
            this.mins.push(val)
        } else {
            const currentMin = this.mins[this.mins.length - 1];
            this.mins.push(Math.min(val, currentMin))
        }
    }

    pop(): void {
        this.main.pop()
        this.mins.pop()
    }

    top(): number {
        return this.main[this.main.length -1 ]
    }

    getMin(): number {
        return this.mins[this.mins.length - 1]
    }
}
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin()); // -3
minStack.pop();

console.log(minStack.top());    // 0
console.log(minStack.getMin());