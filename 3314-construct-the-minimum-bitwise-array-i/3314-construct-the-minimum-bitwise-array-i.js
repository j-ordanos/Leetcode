/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];
        let found = false;
        
        for (let x = 0; x < target; x++) {
            if ((x | (x + 1)) === target) {
                ans.push(x);
                found = true;
                break; 
            }
        }
        
        if (!found) {
            ans.push(-1);
        }
    }
    
    return ans;
};
