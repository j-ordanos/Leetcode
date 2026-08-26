class Solution:
    def reverseByType(self, s: str) -> str:
        letters = []
        special = []
        
        for ch in s:
            if 'a' <= ch <= 'z':
                letters.append(ch)
            else:
                special.append(ch)
                
        letters.reverse()
        special.reverse()
        
        res = []
        l_idx = 0
        s_idx = 0
        
        for ch in s:
            if 'a' <= ch <= 'z':
                res.append(letters[l_idx])
                l_idx += 1
            else:
                res.append(special[s_idx])
                s_idx += 1
                
        return "".join(res)