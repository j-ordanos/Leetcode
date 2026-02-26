/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let steps = 0;
    let num = BigInt('0b'+ s);

   
    while(num > 1n){
        if(num % 2n === 1n){
            num += 1n;
        }else{
            num /= 2n;
        }
        steps++;
    }
    
    return steps;
};