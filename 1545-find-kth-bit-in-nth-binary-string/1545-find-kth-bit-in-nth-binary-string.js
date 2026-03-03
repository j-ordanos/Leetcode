/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n === 1) return "0";

    const length = Math.pow(2, n) - 1;
    const mid = Math.floor(length / 2) + 1;

    if (k === mid) return "1";
    else if (k < mid) return findKthBit(n - 1, k);
    else {
        const mirroredK = length - k + 1;
        const bit = findKthBit(n - 1, mirroredK);
        return bit === "0" ? "1" : "0";
    }
};