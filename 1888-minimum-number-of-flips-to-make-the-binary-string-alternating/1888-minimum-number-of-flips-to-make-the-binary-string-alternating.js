/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const n = s.length;
    const doubledS = s + s;
    
    let target1 = "", target2 = "";
    for (let i = 0; i < doubledS.length; i++) {
        target1 += (i % 2 === 0 ? "0" : "1");
        target2 += (i % 2 === 0 ? "1" : "0");
    }

    let diff1 = 0, diff2 = 0;
    let minFlips = Infinity;
    let left = 0;

    for (let right = 0; right < doubledS.length; right++) {
        if (doubledS[right] !== target1[right]) diff1++;
        if (doubledS[right] !== target2[right]) diff2++;

        if (right - left + 1 > n) {
            if (doubledS[left] !== target1[left]) diff1--;
            if (doubledS[left] !== target2[left]) diff2--;
            left++;
        }

        if (right - left + 1 === n) {
            minFlips = Math.min(minFlips, diff1, diff2);
        }
    }

    return minFlips;
};
