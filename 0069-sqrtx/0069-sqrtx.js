/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        let square = mid * mid;
        if (square > x)
            right = mid -1;
        else if (square < x)
            left = mid + 1;
        else
            return mid;
    }

    return right;
};