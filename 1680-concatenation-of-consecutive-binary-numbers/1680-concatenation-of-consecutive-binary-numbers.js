/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MOD = 1000000007n; 
    let result = 0n;

    for (let i = 1; i <= n; i++) {
        let binaryStr = i.toString(2);
        let len = BigInt(binaryStr.length);
        
        result = ((result << len) + BigInt(i)) % MOD;
    }

    return Number(result); 
};