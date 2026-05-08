class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        n = len(arr)
        if n < 2:
            return n
        
        max_len = 1
        current_len = 0
        last_sign = 0

        for i in range(1,n):
            if arr[i-1] - arr[i]  > 0:
                current_sign = 1
            elif arr[i-1] - arr[i] < 0:
                current_sign = -1
            else: 
                current_sign = 0
            
            if current_sign == 0:
                current_len = 0
            elif i==1 or current_sign != last_sign:
                current_len += 1
            else:
                current_len = 1

            last_sign = current_sign
            max_len = max(max_len, current_len + 1)

        return max_len
