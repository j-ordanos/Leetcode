/**
 * @param {number} n
 * @return {number}
 */

function getGaps(binaryArr, gaps){
    const first = binaryArr.indexOf('1');
    if (first === -1) return (gaps.length > 0) ? Math.max(...gaps) : 0;

    let remaining = binaryArr.slice(first + 1);
    const second = remaining.indexOf('1');

    if (second > -1) {
        gaps.push(second + 1);
        return getGaps(remaining.slice(second), gaps);
    }

    return (gaps.length > 0) ? Math.max(...gaps) : 0;
}

var binaryGap = function(n) {
    if(n === parseInt(n, 10) && n >= 1 && n <= 2147483647){
        const binary = n.toString(2).split('');
        return getGaps(binary, []);
    }
    return 0;
};