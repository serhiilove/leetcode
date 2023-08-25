function binarySearchIterative(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === key) return mid;

        if (arr[mid] > key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

const arr1 = [1, 2, 3];

console.log(binarySearchIterative(arr1, 3));

