/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(num) {
    let currMax = num[0];
    let globalMax = num[0];
    
    for(let i = 1; i< num.length; i++){
        currMax = Math.max(num[i], num[i]+currMax);
        globalMax = Math.max(globalMax, currMax);
    }
    return globalMax;
};