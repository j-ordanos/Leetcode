/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    let path = [];
    let used = new Array(nums.length).fill(false);

    function backtrack(){
        // base case
        if(nums.length === path.length){
            result.push([...path]);
            return;
        }

        for(let i=0; i<nums.length; i++){
            if(used[i]) continue;

            used[i] = true;
            path.push(nums[i]);

            backtrack();

            path.pop();
            used[i] = false;
        }
    } 

    backtrack();
    return result;
};