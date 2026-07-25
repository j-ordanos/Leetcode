class Solution:
    def maxProduct(self, n: int) -> int:
        num_str = str(n)
        digits = []

        for char in num_str:
            digit = int(char)
            digits.append(digit)
        digits.sort(reverse=True)
        return digits[0] * digits[1]