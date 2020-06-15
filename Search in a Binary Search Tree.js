// Solution 1:
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) {
       return null;
    } else {
        if(root.val === val) {
           return root;
        } else if(root.val < val) {
            return searchBST(root.right, val);
        } else if(root.val > val) {
            return searchBST(root.left, val);
        }
    }
};

/***********************************************/


// Solution 2: Compact version

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root || root.val === val) {
        return root;
    }
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};
