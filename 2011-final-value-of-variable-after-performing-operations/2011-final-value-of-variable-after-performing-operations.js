/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let sum = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i] === '++X' || operations[i] === 'X++') sum++;
        else sum--;
    }
    return sum;
};