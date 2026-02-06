/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let tails = [];

    for(x of nums){
        let left = 0;
        let right = tails.length;

        while(left < right){
            let mid = Math.floor((left + right)/2);
            if(tails[mid] < x){
                left = mid + 1;
            }else{
                right = mid;
            }
        }

        if(left === tails.length){
            tails.push(x);
        }else{
            tails[left] = x;
        }
    }

    return tails.length;
};