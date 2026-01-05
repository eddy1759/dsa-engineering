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

## Notes
- Problems may appear multiple times under different patterns.
- Folder placement reflects **strategy**, not LeetCode category.