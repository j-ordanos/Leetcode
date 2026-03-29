/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');

    const reverseWords = words.map(word => {
        return word.split('').reverse().join('');
    })

    return reverseWords.join(' ');
};