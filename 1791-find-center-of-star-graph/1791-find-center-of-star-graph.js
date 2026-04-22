/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [a,b] = edges[0];
    let [c,d] = edges[1];

    return (a === c || a === d) ? a : b;
};