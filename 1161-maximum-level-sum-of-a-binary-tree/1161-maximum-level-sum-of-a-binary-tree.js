/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 0;
    let maxLevel = 1;
    let curLevel = 1;
    let maxSum = -Infinity;
    let q = [root];

    while(q.length > 0){
        let qLen = q.length;
        let levelSum = 0;

        for(let i = 0; i < qLen; i++){
            let node = q.shift();
            levelSum += node.val;

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
        if(levelSum > maxSum){
            maxSum = levelSum;
            maxLevel = curLevel;
        }
        curLevel++;
    }
    return maxLevel;
};