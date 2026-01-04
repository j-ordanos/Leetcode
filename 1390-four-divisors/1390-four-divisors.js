/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let total_sum = 0;

    for(let num of nums){
        let sum = 0;
        let count = 0;

        for(let i = 1; i*i <= num; i++){
            if(num % i === 0){
                let d1 = i;
                let d2 = num / i;

                if(d1 === d2){
                    count += 1;
                    sum += d1;
                }else{
                    count += 2;
                    sum += d1 + d2;
                }

                if(count > 4) break;
            }
        }

        if(count === 4){
            total_sum += sum;
        }
    }

    return total_sum;
};