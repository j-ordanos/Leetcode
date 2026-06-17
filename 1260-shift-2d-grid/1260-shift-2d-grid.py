class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        total_size = m * n
        ans = [[0] * n for _ in range(m)]
        
        k %= total_size
        
        for i in range(m):
            for j in range(n):
                idx = (i * n + j + k) % total_size
                
                new_r, new_c = divmod(idx, n)
                ans[new_r][new_c] = grid[i][j]
                
        return ans