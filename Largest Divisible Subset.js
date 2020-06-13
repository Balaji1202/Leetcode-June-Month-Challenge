/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length === 0) return [];
    let divisibleCount = new Array(nums.length).fill(1);
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(nums[i] % nums[j] === 0) {
                divisibleCount[i] = Math.max(divisibleCount[i], divisibleCount[j] + 1);
            }
        }
    }
    let maxIndex = 0;
    for(let i = 1; i < divisibleCount.length; i++) {
        maxIndex = divisibleCount[i] > divisibleCount[maxIndex] ? i: maxIndex;
    }
    let temp = nums[maxIndex], divisibles = divisibleCount[maxIndex], subset = [];
    for(let i = maxIndex; i >= 0; i--) {
        if(temp % nums[i] === 0 && divisibles === divisibleCount[i]) {
            subset.push(nums[i]);
            maxIndex = nums[i];
            divisibles--;
        }
    }
    return subset;
};
