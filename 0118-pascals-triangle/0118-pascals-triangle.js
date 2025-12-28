/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];

    for(let i = 1; i < numRows; i++){
        let prev = res[res.length - 1];
        let temp = [0, ...prev, 0];
        let row = [];

        for(let j = 0; j < temp.length - 1; j++){
            row.push(temp[j] + temp[j+1]);
        }
        res.push(row);
    }

    return res;
};