/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length
   for(let i = 0; i < n; i++){
        if(i+1 < n && nums[i] === nums[i+1]) return nums[i];
        if(i+1 < n && nums[i] === nums[i+2]) return nums[i];
        if(i+1 < n && nums[i] === nums[i+3]) return nums[i];
   }
};