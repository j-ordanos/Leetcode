/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    const MOD = 1000000007n;

    // base case: n = 1
    // aba - 1st and 3rd color same (red-yellow-red ..)
    // abc - 1st and 3rd color different (red-yellow-green..)
    let aba = 6n;
    let abc = 6n;

    for(let i = 1; i < n; i++){
        let next_aba = (3n * aba + 2n * abc) % MOD;
        let next_abc = (2n * aba + 2n * abc) % MOD;

        aba = next_aba;
        abc = next_abc;
    }

    return Number((aba + abc) % MOD);
};