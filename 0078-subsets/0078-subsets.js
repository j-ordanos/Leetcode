/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subsets = [[]];

    for(let num of nums){
        const next_subsets = subsets.map(set => [...set, num]);
        subsets = [...subsets, ...next_subsets];
    }
    return subsets;
};