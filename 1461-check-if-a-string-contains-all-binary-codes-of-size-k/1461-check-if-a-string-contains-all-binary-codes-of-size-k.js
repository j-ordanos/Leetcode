/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let seen = new Set();
    const reqCount = Math.pow(2,k);

    for(let i=0; i<= s.length-k; i++){
        seen.add(s.substring(i,(i+k)));
        if(seen.size === reqCount) return true;
    }
    return seen.size === reqCount;
};