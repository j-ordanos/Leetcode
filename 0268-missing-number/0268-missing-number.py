class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        expected_total = n*(n+1) // 2
        curr_total = sum(nums)
        return expected_total - curr_total