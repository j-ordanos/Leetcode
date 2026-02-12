/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    const n = s.length;
    let ans = 0;
    for(let i=0; i<n; i++){
        const cnt = new Array(26).fill(0); 
        let mx = 0;
        let v = 0;

        for(let j=i; j<n; j++){
            let idx = s.charCodeAt(j) - 97;
            if(++cnt[idx] === 1) v++;
            mx = Math.max(mx, cnt[idx]);

            let length = j - i + 1;
            if(mx * v === length){
                ans = Math.max(ans, length);
            }
        }
    }
    return ans;
};