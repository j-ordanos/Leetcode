class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        row1 = set('qwertyuiop')
        row2 = set('asdfghjkl')
        row3 = set('zxcvbnm')
        res = []

        for word in words:
            w_set = set(word.lower())

            if w_set.issubset(row1) or w_set.issubset(row2) or w_set.issubset(row3):
                res.append(word)
        
        return res
