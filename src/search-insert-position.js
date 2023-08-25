/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0,
        right = nums.length - 1,
        mid;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    if (target > nums[mid]) return mid + 1;

    return mid;
};


console.log('test 1: ', searchInsert([1, 3, 5, 6], 5) === 2);
console.log('test 2: ', searchInsert([1, 3, 5, 6], 2) === 1);
console.log('test 3: ', searchInsert([1, 3, 5, 6], 7 ) === 4);
console.log('test 4: ', searchInsert([1, 3], 2 ) === 1);

