/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = "";

    while(columnNumber > 0){
        let rem = columnNumber % 26;

        if(rem === 0){
            res += 'Z';
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }else{
            res += String.fromCharCode((rem - 1) + 'A'.charCodeAt(0));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    return res.split("").reverse("").join("");
};