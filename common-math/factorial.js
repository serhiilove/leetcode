/**
 * @param {number} n
 * @return {number}
 */
function getFactorial (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return n * getFactorial(n - 1);
}

const tests = [[0, 0], [1, 1], [2, 2], [3, 6], [4, 24], [5, 120]];

tests.forEach((test, index) => {
    const result = getFactorial(test[0]);

    console.log(`test ${index + 1}: `);
    console.log(`result: ${result} | expected: ${test[1]} | ${result === test[1]}`);
});
