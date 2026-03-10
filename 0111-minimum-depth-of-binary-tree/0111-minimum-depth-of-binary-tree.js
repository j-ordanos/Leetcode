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
var minDepth = function(root) {
    if (!root) return 0;

    const queue = [[root, 1]];

    while (queue.length > 0) {
        const [currNode, currDepth] = queue.shift();

        if (!currNode.left && !currNode.right) return currDepth;

        if (currNode.left) {
            queue.push([currNode.left, currDepth + 1]);
        }

        if (currNode.right) {
            queue.push([currNode.right, currDepth + 1]);
        }
    }
};