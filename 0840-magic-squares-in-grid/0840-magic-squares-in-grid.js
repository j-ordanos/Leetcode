/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0;

    for(let i = 0; i <= rows - 3; i++){
        for(let j = 0; j <= cols - 3; j++){
            if(isMagicSquare(i, j, grid)) count++;
        }
    }

    return count;
};

function isMagicSquare(r, c, grid){
    // Center must be 5
    if (grid[r+1][c+1] !== 5) return false;

    // Check distinct 1-9
    let seen = new Array(10).fill(false);
    for(let i = r; i < r+3; i++){
        for(let j = c; j < c+3; j++){
            let val = grid[i][j];
            if( val < 1 || val > 9 || seen[val]){
                return false;
            }
            seen[val] = true;
        }
    }

    // Check rows
    for(let i = 0; i < 3; i++){
        if(grid[r+i][c] + grid[r+i][c+1] + grid[r+i][c+2] !== 15) return false; 
    }

    // Check columns
    for(let i = 0; i < 3; i++){
        if(grid[r][c+i] + grid[r+1][c+i] + grid[r+2][c+i] !== 15) return false; 
    }

    // Check diagonals 
    let diag1 = grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2];
    let diag2 = grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c];
    
    return diag1 === 15 && diag2 === 15;
}
