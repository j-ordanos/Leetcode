class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        n = len(nums)
        smin = [0] * n
        smin[-1] = nums[-1]
        
        for i in range(n - 2, -1, -1):
            smin[i] = min(smin[i + 1], nums[i])
            
        pmax = -float('inf')
        for i in range(n):
            pmax = max(pmax, nums[i])
            if pmax - smin[i] <= k:
                return i
                
        return -1