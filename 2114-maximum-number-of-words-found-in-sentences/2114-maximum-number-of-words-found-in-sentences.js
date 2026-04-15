/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWord = 0;

    for(s of sentences){
        let len = s.split(" ").length;
        maxWord = Math.max(maxWord, len);
    }
    return maxWord;
};