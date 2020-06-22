/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsMap = {};
    for(let num of nums) {
        numsMap[num] = numsMap[num] ? numsMap[num] + 1: 1;
    }
    for(let key in numsMap) {
        if(numsMap[key] === 1) {
           return key;
        }
    }
};
