class Solution:
    def maximumPopulation(self, logs: List[List[int]]) -> int:
        changes = [0] * 2052
    
        for birth, death in logs:
            changes[birth] += 1
            changes[death] -= 1
            
        max_pop = 0
        max_year = 1950
        current_pop = 0
        
        for year in range(1950, 2051):
            current_pop += changes[year]
            if current_pop > max_pop:
                max_pop = current_pop
                max_year = year
                
        return max_year