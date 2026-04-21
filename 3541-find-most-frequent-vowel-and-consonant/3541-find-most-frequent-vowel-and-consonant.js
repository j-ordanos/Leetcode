/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let myMap = new Map();
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for(let char of s){
        let count = myMap.has(char) ? myMap.get(char)+1 : 1;
        myMap.set(char, count);
    }

    let maxVowel = 0;
    let maxConsonant = 0;

    for(let [char, freq] of myMap){
        if(vowels.has(char)){
           maxVowel = Math.max(maxVowel, freq);
        }else{
            maxConsonant = Math.max(maxConsonant, freq);
        }
    }

    return maxVowel + maxConsonant;
};