import random
import time

def two_sum_brute(nums, target):
    for i in range(len(nums)):
        for j in range(i +1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []

# Test input
nums = [random.randint(0, 10000) for _ in range(10000)]
target = nums[0] + nums[1]

# Benchmark Brute Force
start = time.perf_counter()
for _ in range(10):
    two_sum_brute(nums, target)
end = time.perf_counter()
print(f"Python Brute Force: {end - start:.6f} seconds")