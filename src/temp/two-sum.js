/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ht = {};
    let result;

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in ht) {
            result = [ht[target - nums[i]], i];
            break;
        } else {
            ht[nums[i]] = i;
        }
    }

    return result;
};

console.log('test 1: ', twoSum([2,7,11,15], 9));
console.log('test 2: ', twoSum([3,2,4], 6));
console.log('test 3: ', twoSum([3,3], 6));
