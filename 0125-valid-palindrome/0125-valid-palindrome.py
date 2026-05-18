class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_chars = []
        for char in s:
            if char.isalnum():
                clean_chars.append(char.lower())
        
        clean_txt = ''.join(clean_chars)
        reversed_txt = clean_txt[::-1]

        return clean_txt == reversed_txt