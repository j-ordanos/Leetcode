/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    while(i>=0 || j>=0 || carry){
        let bitA = i >= 0 ? Number(a[i]) : 0;
        let bitB = j >= 0 ? Number(b[j]) : 0;

        let sum = bitA + bitB + carry;
        res = (sum % 2) + res;
        carry = Math.floor(sum/2);

        i--;
        j--;
    }
    return res;
};