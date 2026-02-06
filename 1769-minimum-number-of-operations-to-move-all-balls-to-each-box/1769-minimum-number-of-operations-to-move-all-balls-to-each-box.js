/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    let ans = new Array(n).fill(0);

    let count = 0;
    let moves = 0;

    // left-to-right pass
    for(let i=0; i<n; i++){
        ans[i] += moves;
        if(boxes[i] === '1'){
            count++;
        }
        moves += count;
    }

    // reset
    count = 0;
    moves = 0;
    // right-to-left pass
    for(let i = n-1; i >= 0; i--){
        ans[i] += moves;
        if(boxes[i] === '1'){
            count++;
        }
        moves += count;
    }

    return ans;
};