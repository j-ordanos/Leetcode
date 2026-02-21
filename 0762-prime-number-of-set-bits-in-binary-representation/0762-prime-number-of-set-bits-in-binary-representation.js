/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let count = 0;
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19])

    for(let i=left; i<=right; i++){
        let num = i.toString(2).split('1').length - 1;

        if(primes.has(num)) count++;
    }
    return count;
};