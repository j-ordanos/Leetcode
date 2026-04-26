/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let n = grid.length;
    let maxLocal = [];

    for(let i=0; i<n-2; i++){
        let row = [];

        for(let j=0; j<n-2; j++){
            let currMax = 0;

            for(let row=i; row<i+3; row++){
                for(let col=j; col<j+3; col++){
                    currMax = Math.max(currMax, grid[row][col]);
                }
            }
            row.push(currMax);
        }
        maxLocal.push(row);
    }

    return maxLocal;
};