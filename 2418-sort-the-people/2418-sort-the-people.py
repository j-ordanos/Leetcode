class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        mapping = {heights[i] : names[i] for i in range(len(names))}
        return [mapping[h] for h in sorted(mapping.keys(), reverse=True)]
