/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const numSet = new Set(nums);

    function backtrack(curr){
        if(curr.length === n){
           return numSet.has(curr) ? null : curr;
        }

        let res = backtrack( curr + '0');
        if(res) return res;

        return backtrack(curr + '1');
    }

    return backtrack('');
};