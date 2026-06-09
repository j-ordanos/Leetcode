class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        curr_pos = 0
        boundary = 0

        for move in nums:
            curr_pos += move
            if curr_pos == 0:
                boundary += 1
        return boundary