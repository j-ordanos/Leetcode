class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_count = Counter(tuple(row) for row in grid)
        
        ans = 0
        for col in zip(*grid):
            if col in row_count:
                ans += row_count[col]
                
        return ans