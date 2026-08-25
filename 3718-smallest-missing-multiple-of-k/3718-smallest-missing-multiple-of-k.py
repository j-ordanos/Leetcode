class Solution:
    def missingMultiple(self, nums: List[int], k: int) -> int:
        num_set = set(nums)
        i = 1
        while (i * k) in num_set:
            i += 1
        return i * k