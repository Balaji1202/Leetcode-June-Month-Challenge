/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let hashMap = {};
    for(let num of nums) {
        if(hashMap[num]) {
            return num;
        }
        hashMap[num] = 1;
    }
};
