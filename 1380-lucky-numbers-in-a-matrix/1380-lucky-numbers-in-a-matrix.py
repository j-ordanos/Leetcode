class Solution:
    def luckyNumbers(self, matrix: List[List[int]]) -> List[int]:
        row_min_vals = [min(row) for row in matrix]
        col_max_vals = [max(col) for col in zip(*matrix)]
        lucky_numbers = []
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == row_min_vals[i] and matrix[i][j] == col_max_vals[j]:
                    lucky_numbers.append(matrix[i][j])
                    
        return lucky_numbers