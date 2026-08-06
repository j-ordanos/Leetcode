class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        while True:
            if self.getDigitProduct(n) % t == 0:
                return n
            n += 1

    def getDigitProduct(self, num: int) -> int:
        product = 1
        while num > 0:
            product *= num % 10
            num //= 10
        return product