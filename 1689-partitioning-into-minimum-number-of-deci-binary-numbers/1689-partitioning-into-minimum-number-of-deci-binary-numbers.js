/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let maxDigit = 0;
    
    for (const char of n) {
        const digit = parseInt(char);
        if (digit > maxDigit) {
            maxDigit = digit;
        }
        if (maxDigit === 9) return 9;
    }
    
    return maxDigit;
};