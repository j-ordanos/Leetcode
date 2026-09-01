class Solution:
    def maxSumOfSquares(self, num: int, sum: int) -> str:
        sum_val = sum
        
        if sum_val > 9 * num:
            return ""
        
        nines = sum_val // 9
        remainder = sum_val % 9
        
        ans = "9" * nines
        if remainder > 0:
            ans += str(remainder)
            
        ans += "0" * (num - len(ans))
        
        return ans