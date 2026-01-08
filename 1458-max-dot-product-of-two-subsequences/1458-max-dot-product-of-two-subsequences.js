/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const dp = Array.from({length : n}, () => Array(m).fill(-Infinity));

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++ ){
            const currentProd = nums1[i] * nums2[j];

            if(i === 0 && j === 0){
                dp[i][j] = currentProd;
            }else if(i === 0){
                dp[i][j] = Math.max(dp[i][j-1], currentProd)
            }else if(j === 0){
                dp[i][j] = Math.max(dp[i-1][j], currentProd)
            }else{
                dp[i][j] = Math.max(currentProd, 
                    currentProd + Math.max(0, dp[i-1][j-1]),
                    dp[i-1][j],
                    dp[i][j-1])
            }
        }
    }

    return dp[n-1][m-1]
};