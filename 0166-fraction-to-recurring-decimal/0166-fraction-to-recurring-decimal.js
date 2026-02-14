/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === 0) return '0';

    let res = '';
    if(Math.sign(numerator) !== Math.sign(denominator)){
        res += '-';
    }

    let n = BigInt(Math.abs(numerator));
    let d = BigInt(Math.abs(denominator));

    res += (n/d).toString();
    let rem = n%d;

    if(rem === 0n) return res;

    res += '.';

    const remainderMap = new Map();

    while (rem !== 0n) {
        if (remainderMap.has(rem)) {
            const index = remainderMap.get(rem);
            return res.slice(0, index) + "(" + res.slice(index) + ")";
        }

        remainderMap.set(rem, res.length);

        rem *= 10n;
        res += (rem / d).toString();
        rem %= d;
    }

    return res
};