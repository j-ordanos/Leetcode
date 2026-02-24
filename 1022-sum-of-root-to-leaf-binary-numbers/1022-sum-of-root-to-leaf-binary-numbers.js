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
var sumRootToLeaf = function(root) {
    if(!root) return null;
    let sum = 0;
    let stack = [[root, 0]];

    while(stack.length > 0){
        let [node, currNum] = stack.pop();
        currNum = (currNum * 2) + node.val;

        if(!node.left && !node.right){
            sum += currNum;
        }

        if(node.left){
            stack.push([node.left, currNum]);
        }
        if(node.right){
            stack.push([node.right, currNum]);
        }
    }
    return sum;
};