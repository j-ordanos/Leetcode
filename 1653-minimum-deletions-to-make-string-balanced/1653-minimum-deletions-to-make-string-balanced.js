/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let deletions = 0;
    let b_count = 0;

    for(let char of s){
        if(char === 'b'){
            b_count++;
        }else{
            deletions = Math.min(deletions+1, b_count);
        }
    }
    return deletions;
};