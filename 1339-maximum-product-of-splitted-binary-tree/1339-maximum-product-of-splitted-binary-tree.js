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
var maxProduct = function(root) {
    let tree_sum = [];

    const dfs = (node) => {
        if(!node) return 0;
        
        let l_sum = dfs(node.left);
        let r_sum = dfs(node.right);

        let cur_sum = l_sum + r_sum + node.val;

        tree_sum.push(cur_sum);
        return cur_sum;
    }

    let total_sum = dfs(root);
    let max_product = 0n;

    for(let sum of tree_sum){
        let cur_product = BigInt(sum) * BigInt(total_sum - sum);
        
        if (cur_product > max_product) {
            max_product = cur_product;
        }
    }

    return Number(max_product % BigInt(1e9 + 7));
};