**Purpose: Quick lookup of which pattern solves which problem.**

**Example for Two Sum:**


# DSA Pattern Index

| Pattern | Problem | File (TS) | File (Python) | Notes |
|---------|---------|-----------|---------------|-------|
| Brute Force | Two Sum | patterns/arrays/two-sum.ts | patterns/arrays/two-sum.py | Simple O(n²) approach |
| Hash Map | Two Sum | patterns/hash-map/two-sum.ts | patterns/hash-map/two-sum.py | O(n) using complement lookup |
| Brute Force    | Two Sum II          | patterns/arrays/two-sum-bruteforce.ts            | patterns/arrays/two-sum-bruteforce.py             | Ignores sorted constraint |
| Two Pointers   | Two Sum II (Sorted) | patterns/two-pointers/two-sum-ii.ts               | patterns/two-pointers/two-sum-ii.py               | Optimal O(n) |
| Brute Force   | 3Sum                 | patterns/arrays/three-sum-brute.ts     | patterns/arrays/three-sum-brute.py       | O(n³), baseline |
| Two Pointers  | 3Sum                 | patterns/two-pointers/three-sum.ts           | patterns/two-pointers/three-sum.py            | Sort + two pointers, O(n²) |
| Sliding Window  | Maximum Average Subarray I                 | patterns/sliding-window/max-average-subarray.ts           | patterns/sliding-window/max-average-subarray.py            | Fixed-size sliding window to maintain the sum of the current subarray O(n) |
| Sliding Window  | Lenght of Maximum Substring                 | patterns/sliding-window/length-of-maximum-substring.ts           | patterns/sliding-window/length-of-maximum-substring.py            | se a sliding window to track the current substring without repeating characters O(n) |
| Stack  | Valid Parentheses              | patterns/stack/valid-arenthesis.ts           | patterns/stack/valid-arenthesis.py            | Use stack to track opening brackets and ensure they are properly closed. O(n) |
| Greedy Algorithms  | Largest Merge              | patterns/greedy/largest-merge.ts           | patterns/greedy/largest-merge.py            | Use a greedy approach to find the largest merge of two strings. O(n + m) |
| Stack  | Min Stack              | patterns/stack/min-stack/min-stack.ts           | patterns/stack/min-stack/min-stack.py            | Use an auxiliary stack to keep track of the minimums. O(n) |
| Stack (Monotonic)  | Daily Temperature              | patterns/stack/daily-temperature.ts           | patterns/stack/daily-temperature.py            | Last unresolved element decides next action. O(n) |
| Stack (Monotonic)  | Largest Rectangle in Histogram              | patterns/stack/largest-rectangle-histogram.ts           | patterns/stack/largest-rectangle-histogram.py            | Use a stack to keep track of indices of the histogram bars. O(n) |

## Notes
- Problems may appear multiple times under different patterns.
- Folder placement reflects **strategy**, not LeetCode category.