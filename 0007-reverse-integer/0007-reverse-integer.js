/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedNum = 0; 
    while(x !== 0){
        let digit = x % 10;
        x = Math.trunc(x/10);
        reversedNum = reversedNum * 10 + digit;
    }

    // Check against 32-bit signed integer range
    const MAX = 2 ** 31 - 1;
    const MIN = -(2** 31);

    if (reversedNum > MAX || reversedNum < MIN) {
        return 0;
    }

    return reversedNum;
};
