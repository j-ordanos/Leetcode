/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const flattenArr = [];
    for(let i=0; i<arr.length; i++){
        if(i in arr){
            let elt = arr[i];
            if(n>0 && Array.isArray(elt)){
                flattenArr.push(...flat(elt, n-1));
            }else{
                flattenArr.push(elt);
            }
        }
    }

    return flattenArr;
};