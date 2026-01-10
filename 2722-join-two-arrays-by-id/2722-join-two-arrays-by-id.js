/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {}
    arr1.forEach(el => {
        res[el.id] = el
    })
    arr2.forEach(el => {
    if (!res[el.id]) {
        res[el.id] = el 
    } else {
        res[el.id] = { ...res[el.id], ...el}
    } 
    })
    return Object.values(res)
};