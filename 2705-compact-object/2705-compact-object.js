/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(!obj || typeof obj !== 'object') return obj;
    if(Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject);
    }
    const result = {};
    for(const key in obj){
        let value = compactObject(obj[key]);
        if(Boolean(value)){
            result[key] = value;
        }
    }
    return result;
};