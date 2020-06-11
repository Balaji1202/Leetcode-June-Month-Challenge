/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function (i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        
    }
    for(let i = 0; i < nums.length; i++) {
        for(let j = i; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                swap(i, j);
            }
        }
    }
};
