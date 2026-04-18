/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let reversedN = parseInt(n.toString().split('').reverse().join(''));

   return Math.abs(n-reversedN);
};