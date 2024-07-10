/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    const circle = 2 * n - 2;
    const steps = time > circle ? time % circle : time;

    if (steps === 0) return 1;
    return (steps < n) ? steps + 1 : 2 * n - steps - 1;
};

console.log('test 1:', passThePillow(4,5));
console.log('test 2:', passThePillow(3,2));