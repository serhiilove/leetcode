/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const twoSum2 = function(nums, target) {
    const ht = new Map();

    for (let i = 0; i < nums.length; i++) {
        const j = ht.get(target - nums[i]);
        if (j !== undefined) {
            return [j, i];
        }

        ht.set(nums[i], i);
    }
};

console.log(twoSum([2,7,11,15], 9)); // O(n^2/2)
console.log(twoSum2([2,7,11,15], 9)); // O(n)
