/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let count0 = 0; 
    const n = s.length;
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '0') count0++;
        } else {
            if (s[i] !== '1') count0++;
        }
    }

    return Math.min(count0, n - count0);
};
