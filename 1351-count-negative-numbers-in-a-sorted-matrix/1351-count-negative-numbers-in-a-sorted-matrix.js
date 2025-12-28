/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let row_idx = m - 1;
    let col_idx = 0;

    while(row_idx >= 0 && col_idx < n){
        if(grid[row_idx][col_idx] < 0){
            count += (n-col_idx);
            row_idx--;
        }
        else
            col_idx++;
    }

    return count;
};