/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    // sort the array
    // nums = [a1,a2,a3...an-1, an]
    nums.sort((a, b) => a - b);

    const len = nums.length;
    const halfLen = len/2;
    let maxSum = 0;

    for(let i=0; i<halfLen; i++){
        // sum = a1+an, a2+an-1
        const currentSum = nums[i] + nums[len-1-i];

        if(currentSum > maxSum){
            maxSum = currentSum;
        }
    }
    return maxSum;
};