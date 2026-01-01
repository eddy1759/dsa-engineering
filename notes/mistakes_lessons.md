# Mistakes & Lessons Learned

## Two Sum – TypeScript & Python
- Date: 01/01/2026

1. **Incorrect return in TS brute force**
   ```ts
   return i, j // ❌

    - Mistake: comma operator doesn’t return array.
    - Fix: return [i, j]
    ```
2. **Assignment vs comparison**
    ```ts
    if ((nums[i] + nums[j]) = target) // ❌

    - Mistake: used = instead of ===
    - Fix: if (nums[i] + nums[j] === target)
    ```


3. **Lesson:** 
    - Either throw or return early to avoid runtime errors.

    - Microbenchmark misinterpretation

    - Observed Brute Force sometimes faster for small arrays.

    - Small inputs → constant-time overhead dominates. Always benchmark large arrays for meaningful results.

    - HashMap overhead: On tiny arrays (<10 elements), using Map/dict may be slower due to initialization cost.