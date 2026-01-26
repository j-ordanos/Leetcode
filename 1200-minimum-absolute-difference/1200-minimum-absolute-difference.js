/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);

    const n= arr.length;
    let minDiff = Infinity;
    let res = [];

    for(let i=1; i<n; i++){
        let currentDiff = arr[i] - arr[i-1];

        if(currentDiff < minDiff){
            minDiff = currentDiff;
            res = [[arr[i-1], arr[i]]];
        }
        else if(currentDiff === minDiff) {
            res.push([arr[i - 1], arr[i]]);
        }
    }

    return res;
};