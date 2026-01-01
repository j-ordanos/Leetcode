/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if( num1 === '0' || num2 == '0') return '0';
    let n1 = num1.length;
    let n2 = num2.length;
    let result = new Array(n1 + n2).fill(0);

    for(let i= n1 - 1; i >= 0; i--){
        for(let j = n2 - 1; j >= 0; j--){
            
            let mul = (num1[i] - '0') * (num2[j] - '0');

            result[i+j] += mul;

            if(result[i+j] >= 10){
                if((i === 0 && j === 0)) break;
                else{
                    result[i+j-1] += Math.floor(result[i+j] / 10);
                    result[i+j] %= 10; 
                }
            }
        }
    }

    if(result[result.length - 1] === 0) result.pop();

    return result.join('');
};