class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        
        for row in matrix:
            if len(set(row)) != n:
                return bool(False)
                
        for col in zip(*matrix):
            if len(set(col)) != n:
                return bool(False)
                
        return bool(True)