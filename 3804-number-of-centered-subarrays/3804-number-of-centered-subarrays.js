/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        let seenElements = new Set();

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            seenElements.add(nums[j]);

            if (seenElements.has(currentSum)) {
                count++;
            }
        }
    }

    return count;
};