/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let totalSum = 0;
    let minAbsVal = Infinity;
    let negCount = 0;

    for(let row of matrix){
        for(let val of row){
            totalSum += Math.abs(val);
            if(val < 0) negCount++;

            minAbsVal = Math.min(minAbsVal, Math.abs(val));
        }
    }

    if(negCount % 2 != 0) totalSum -= 2 * minAbsVal;

    return totalSum;
};