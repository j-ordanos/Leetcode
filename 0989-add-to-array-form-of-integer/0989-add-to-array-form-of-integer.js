/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    res = BigInt(num.join('')) + BigInt(k);
    return Array.from(String(res), Number);
};