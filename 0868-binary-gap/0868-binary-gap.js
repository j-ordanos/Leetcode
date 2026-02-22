/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2);
    let maxGap = 0;
    let last = -1;

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            if (last !== -1) {
                maxGap = Math.max(maxGap, i - last);
            }
            last = i;
        }
    }
    return maxGap;
};