/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let reversedBits = (n | 0).toString(2).padStart(32, '0').split("").reverse().join("");
    return parseInt(reversedBits, 2) | 0;
};