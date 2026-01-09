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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    function dfs(node){
        if(!node) return [0, null];

        const [leftDepth, leftSubTree] = dfs(node.left);
        const [rightDepth, rightSubTree] = dfs(node.right);

        if(leftDepth === rightDepth) return [leftDepth + 1, node];
        else if(leftDepth > rightDepth) return [leftDepth + 1, leftSubTree];
        else return [rightDepth + 1, rightSubTree];
    }

    return dfs(root)[1];
};