class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        res = []
        total_shift = 0
        
        for i in range(len(shifts) - 1, -1, -1):
            total_shift = (total_shift + shifts[i]) % 26
            
            new_char_code = (ord(s[i]) - ord('a') + total_shift) % 26
            res.append(chr(ord('a') + new_char_code))
        
        return "".join(res[::-1])