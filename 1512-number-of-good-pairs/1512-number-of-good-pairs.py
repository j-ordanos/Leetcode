class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count_map = {}
        good_pairs = 0
        
        for num in nums:
            if num in count_map:
                good_pairs += count_map[num]
                count_map[num] += 1
            else:
                count_map[num] = 1
                
        return good_pairs