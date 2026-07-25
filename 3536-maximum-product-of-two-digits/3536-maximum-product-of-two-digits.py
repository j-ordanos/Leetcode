class Solution:
    def maxProduct(self, n: int) -> int:
        s = str(n)
        max_p = 0
        l = len(s)

        for i in range(l):
            for j in range(i+1, l):
                prod = int(s[i]) * int(s[j])
                if prod > max_p:
                    max_p = prod
        return max_p