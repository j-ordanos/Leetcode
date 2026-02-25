/**
 * @param {number[]} arr
 * @return {number[]}
 */

 function countOnes(n){
    let count = 0;
    while (n > 0) {
        n &= (n - 1);
        count++;
    }
    return count;
 }
 
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        const countA = countOnes(a);
        const countB = countOnes(b);

        return countA - countB || a-b;
    })
};