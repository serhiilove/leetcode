/**
 * Get N-th member of the Fibonacci sequence
 * @param {number} n
 * @return {number}
 */

function getNthMemberOfSequence (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return getNthMemberOfSequence(n - 1) + getNthMemberOfSequence(n - 2);
}

console.log(getNthMemberOfSequence(15));
