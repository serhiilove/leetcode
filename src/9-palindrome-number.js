/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) return false;

    let b = 0; // Order of magnitude
    while ( Math.trunc(x / Math.pow(10, b)) >= 10 ) {
        b++;
    }

    let tempX = x;
    const half = Math.trunc((b + 1) / 2)

    for (let j= 1; j <= half; j++) {
        const p1 = Math.trunc(tempX / Math.pow(10, b));
        const p2 = tempX % 10;

        if (p1 !== p2) return false;

        tempX = Math.trunc((tempX % Math.pow(10, b)) / 10);
        b = b - 2;
    }

    return true;
};

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome2 = function(x){
    if (x < 0 || x % 10 === 0 && x !== 0) return false;

    let reversedHalf = 0;
    while(x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.trunc(x / 10);
    }

    return x === reversedHalf || x === Math.trunc(reversedHalf / 10);
}

console.log('test 1:', isPalindrome2(121) === true ? 'ok' : 'failed');
console.log('test 2:', isPalindrome2(-121) === false ? 'ok' : 'failed');
console.log('test 3:', isPalindrome2(10) === false ? 'ok' : 'failed');

console.log('test 4:', isPalindrome2(1) === true ? 'ok' : 'failed');
console.log('test 5:', isPalindrome2(123454321) === true ? 'ok' : 'failed');
console.log('test 6:', isPalindrome2(3345433) === true ? 'ok' : 'failed');

