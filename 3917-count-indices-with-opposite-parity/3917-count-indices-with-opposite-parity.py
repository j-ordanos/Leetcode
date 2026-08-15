class Solution:
    def countOppositeParity(self, nums: list[int]) -> list[int]:
        n = len(nums)
        answer = [0] * n
        even_count = 0
        odd_count = 0
        
        for i in range(n - 1, -1, -1):
            if nums[i] % 2 == 0:
                answer[i] = odd_count
                even_count += 1
            else:
                answer[i] = even_count
                odd_count += 1
                
        return answer