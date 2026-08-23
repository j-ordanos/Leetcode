class Solution:
    def sumGame(self, num: str) -> bool:
        n = len(num)
        mid = n // 2
        
        left_sum = sum(int(c) for c in num[:mid] if c != '?')
        right_sum = sum(int(c) for c in num[mid:] if c != '?')
        
        left_q = num[:mid].count('?')
        right_q = num[mid:].count('?')
        
        sum_diff = left_sum - right_sum
        q_diff = right_q - left_q
        
    
        if (q_diff % 2 == 0) and (sum_diff == (q_diff // 2) * 9):
            return False  
            
        return True  