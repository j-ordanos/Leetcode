/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let swapIdx = 1;
    for(let i=0; i < nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[swapIdx] = nums[i +1];
            swapIdx++;
        }
    }
    return swapIdx;
};