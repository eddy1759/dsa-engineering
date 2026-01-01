
import random
import time


def two_sum_hashmap(nums, target):
    seen = {}
    for i in range(len(nums)):
        complement = target - nums[i]
        if complement in seen:
            return [seen[complement], i]
        seen[nums[i]] = i
    return []



# Test input
nums = [random.randint(0, 10000) for _ in range(10000)]
target = nums[0] + nums[1]


# Benchmark Hash Map
start = time.perf_counter()
for _ in range(10):
    two_sum_hashmap(nums, target)
end = time.perf_counter()
print(f"Python Hash Map: {end - start:.6f} seconds")
                