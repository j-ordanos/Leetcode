class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        if n == 0:
            return -1
        
        suffix_min = [0] * n
        suffix_min[-1] = nums[-1]
        for i in range(n - 2, -1, -1):
            suffix_min[i] = min(nums[i], suffix_min[i+1])
        
        current_max = float('-inf')
        
        for i in range(n):
            current_max = max(current_max, nums[i])
            instability_score = current_max - suffix_min[i]
            
            if instability_score <= k:
                return i
                
        return -1