/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let total_sum = 0;

    for(let num of nums){
        let divisors = [];
        for(let i = 1; i <= num; i++){
            if(num % i === 0){
                divisors.push(i);
            }

            if(divisors.length > 4) break;
        }
        if(divisors.length === 4){
                total_sum += divisors[0] + divisors[1] + divisors[2] + divisors[3]; 
            }
    }

    return total_sum;
};