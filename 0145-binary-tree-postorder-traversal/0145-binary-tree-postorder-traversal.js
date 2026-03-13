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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const res = [];
    let cur = root;

    while (cur) {
        if (!cur.right) {
            res.push(cur.val);
            cur = cur.left;
        } else {
            let prev = cur.right;
            while (prev.left && prev.left !== cur) {
                prev = prev.left;
            }

            if (!prev.left) {
                res.push(cur.val);
                prev.left = cur;
                cur = cur.right;
            } else {
                prev.left = null;
                cur = cur.left;
            }
        }
    }

    return res.reverse();
};
