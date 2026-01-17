/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let stack = [];

    for(let char of s){
        if(char === '(') stack.push(')');
        else if(char === '[') stack.push(']');
        else if(char === '{') stack.push('}');
        else{
            if(s.length === 0 || stack.pop() !== char) return false;
        }
    }

    return stack.length === 0;
};