/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    return nums.map((v, i) => nums.at((i + v) % nums.length));
};