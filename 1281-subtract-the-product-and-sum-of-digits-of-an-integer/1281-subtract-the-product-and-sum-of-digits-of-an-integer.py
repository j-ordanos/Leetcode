class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        digit_prod = 1
        digit_sum = 0

        while n > 0:
            digit = n % 10
            digit_prod *= digit
            digit_sum += digit
            n //= 10
        return digit_prod - digit_sum