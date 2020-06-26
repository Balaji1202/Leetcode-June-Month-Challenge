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
var sumNumbers = function(root) {
    if(!root) {
       return 0;
    }
    let numberArray = [], result = 0;
    var findNumber = function(node, numberString = '') {
        if(node.left) {
            findNumber(node.left, numberString + node.val);
        }
        if(node.right) {
            findNumber(node.right, numberString + node.val);
        }
        if(!node.left && !node.right) {
            result += +(numberString + node.val);
        }
    }
    findNumber(root);
    return result
};
