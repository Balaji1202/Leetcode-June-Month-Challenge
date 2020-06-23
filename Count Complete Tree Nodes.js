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
var countNodes = function(root, array = []) {
    if(root) {
        array.push(root.val);
        if(root.left) {
            countNodes(root.left, array);   
        }
        if(root.right) {
            countNodes(root.right, array);
        }
    }
    return array.length
};
