/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const n = nums.length;
    let result = new Array(n);

    for(let i=0; i<n; i++){
        let targetIndex = (i + nums[i] % n + n) % n;
        result[i] = nums[targetIndex];
    }

    return result;
};