/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const left = new Array(n);
    const right = new Array(n);
    const stack = [];

    // Fill left[]
    for(let i=0; i<n; i++){
        while(stack.length>0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        left[i] = stack.length === 0 ? 0 : stack[stack.length-1] + 1;
        stack.push(i);
    }

    // clear stack
    stack.length = 0;

    // Fill right[]
    for(let i=n-1; i>=0; i--){
        while(stack.length>0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        right[i] = stack.length === 0 ? n-1 : stack[stack.length-1] - 1;
        stack.push(i);
    }

    // calculate max area
    let maxArea = 0;
    for(let i=0; i<n; i++){
        maxArea = Math.max(maxArea, heights[i] * (right[i] - left[i] + 1));
    }

    return maxArea;
};