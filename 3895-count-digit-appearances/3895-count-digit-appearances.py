class Solution:
    def countDigitOccurrences(self, nums: list[int], digit: int) -> int:
        result = "".join(str(n) for n in nums)
        return int(result.count(str(digit)))