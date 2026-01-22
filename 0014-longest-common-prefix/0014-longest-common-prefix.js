/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    const minLen = Math.min(...strs.map(s => s.length));

    for(let i=0; i < minLen; i++){
        const charToMatch = strs[0][i];

        const allMatch = strs.every(s => s[i] === charToMatch);

        if(!allMatch){
            return strs[0].slice(0,i);
        }
    }

    return strs[0].slice(0,minLen);
};