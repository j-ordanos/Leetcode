/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
   return nums.find((elt, idx, arr) =>{
        return arr.indexOf(elt) < idx;
    }); 
};