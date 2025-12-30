/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let res = [];
    let remainder = 0;

    for(let num of nums){
        remainder = (remainder * 2 + num) % 5;
        res.push(remainder === 0)
    }
    return res;
};