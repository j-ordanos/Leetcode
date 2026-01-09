/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let resultArr = [];
    for(let i = 0; i < arr.length; i += size){
        const chunk = arr.slice(i, i + size);
        resultArr.push(chunk)
    }
    return resultArr;
};
