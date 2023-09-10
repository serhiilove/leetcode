/**
 * @param {number} n
 * @return {number}
 */
var climbStairsRecursive = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
};


// Top-bottom approach (recursion + memoization)

// let ways = [0, 1, 2];
// /**
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs (n) {
//     if (!ways[n]) {
//         ways[n] = climbStairs(n - 1) + climbStairs(n - 2);
//     }
//
//     return ways[n];
// }
//
// console.log('result :', climbStairs(5));

/**
 * Climb stairs (Bottom-up DP approach)
 * @param {number} n
 * @return {number}
 */
function climbStairs(n){
    let beforePrev = 1;
    let prev = 2;
    let next;

    if (n === 1) return beforePrev;
    if (n === 2) return prev;

    for (let i = 2; i < n; i++) {
        console.log(i);

        next = prev + beforePrev;

    }

    return next

}

console.log('result: ', climbStairs(3));
