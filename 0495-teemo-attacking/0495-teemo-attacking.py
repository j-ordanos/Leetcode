class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        if not timeSeries:
            return 0

        tot_seconds = 0
        for t in range(len(timeSeries) - 1):
            gap = timeSeries[t + 1] - timeSeries[t]

            tot_seconds += min(duration, gap)
        
        return tot_seconds + duration