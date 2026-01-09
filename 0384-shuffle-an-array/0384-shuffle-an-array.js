/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums]; // save orginal array
    this.copiedArr = [...nums]; // copying orginal array
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let len = this.copiedArr.length;
    
    for(let i = len - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));

        [this.copiedArr[i], this.copiedArr[j]] = [this.copiedArr[j], this.copiedArr[i]];
    }

    return this.copiedArr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */