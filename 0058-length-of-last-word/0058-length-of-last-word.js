/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // remove extra space on both ends
    s = s.trim();

    // split in to words
    let words = s.split(' ');

    // return length of last word
    return words[words.length - 1].length;
};