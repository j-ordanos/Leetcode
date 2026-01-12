/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    let count = 0;
    const uniqueChars = new Set();

    for(let i=0; i<s.length; i++){
        uniqueChars.add(s[i]);

        const length = i+1;
        const distnictCount = uniqueChars.size;

        if(distnictCount === (length%3)) count++;
    }

    return count;
};