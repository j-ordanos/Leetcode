/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const lastTwo = new Map();
    let minDistance = Infinity;

    for (let k = 0; k < nums.length; k++) {
        const val = nums[k];
        
        if (!lastTwo.has(val)) {
            lastTwo.set(val, [k]);
        } else {
            const indices = lastTwo.get(val);
            indices.push(k);
            
            if (indices.length === 3) {
                const i = indices[0];
                const distance = 2 * (k - i);
                if (distance < minDistance) {
                    minDistance = distance;
                }
                indices.shift();
            }
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};
