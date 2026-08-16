class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        ans = []

        for num in nums:
            nums_str = str(num)

            for char in nums_str:
                digit = int(char)
                ans.append(digit)
                
        return ans