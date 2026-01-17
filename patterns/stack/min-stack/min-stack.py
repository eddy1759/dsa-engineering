# Leetcode 155: Min Stack
# URL: https://leetcode.com/problems/min-stack/
# Pattern: Stack
# Time: O(1) for each operation
# Space: O(n)
# Insight: Use an auxiliary stack to keep track of the minimums.

class MinStack:
    
    def __init__(self):
        self.stack = []
        self.min_stack = []
        
    def push(self, val: int) -> None:
        self.stack.append(val)
        
        if len(self.min_stack) == 0:
            self.min_stack.append(val)
        else:
            currentMins = self.min_stack[-1]
            self.min_stack.append(min(val, currentMins))
            
    def pop(self) -> None:
        self.stack.pop()
        self.min_stack.pop()
        
    def top(self) -> int:
        return self.stack[-1]
    
    def getMin(self) -> int:
        return self.min_stack[-1]
    
    
minStack = MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
print(minStack.getMin())  # -3
minStack.pop()
print(minStack.top())     # 0
print(minStack.getMin())  # -2