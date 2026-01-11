/**
 * Helper function:
 * Largest Rectangle in Histogram (LeetCode 84)
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    // Sentinel to flush the stack
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0
                ? i
                : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    // Remove sentinel
    heights.pop();
    return maxArea;
}

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = new Array(cols).fill(0);
    let maxArea = 0;

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            //build histogram
            heights[j] = matrix[i][j] === '1' ? heights[j]+1 : 0;
        }
        // solve histogram for this row
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};