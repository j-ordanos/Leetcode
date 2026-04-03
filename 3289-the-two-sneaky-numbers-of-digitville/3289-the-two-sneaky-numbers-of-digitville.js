/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let numSet = new Set();
    let ans = [];

    for(let i=0; i<nums.length; i++){
        if(numSet.has(nums[i])){
            ans.push(nums[i]);
        }else{
           numSet.add(nums[i]); 
        }
    }
    return ans;
};