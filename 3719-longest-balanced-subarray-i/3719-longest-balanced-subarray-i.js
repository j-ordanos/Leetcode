/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function(nums) {
    let max_len = 0;
    const n = nums.length;

    for(let i=0; i<n; i++){
        const evens = new Set();
        const odds = new Set();
        for(let j=i; j<n; j++){
            let current = nums[j];

            if(current % 2 === 0){
                evens.add(current);
            }else{
                odds.add(current);
            }

            if(evens.size === odds.size){
                max_len = Math.max(max_len, j-i+1);
            }
        }
    }

    return max_len;
};