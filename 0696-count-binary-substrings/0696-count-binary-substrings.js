/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let ans = 0;
    let prevEquals = 0;
    let currEquals = 1;

    for(let i=0; i < s.length-1; i++){
        if(s[i] === s[i+1]){
            currEquals++;
        }else{
            ans += Math.min(prevEquals, currEquals);
            prevEquals = currEquals;
            currEquals = 1;
        }
    }

    return ans + Math.min(prevEquals, currEquals);
};