/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let p = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (p.length > strs[i].length) {
            p = p.slice(0, strs[i].length);
        }
        while (!strs[i].startsWith(p) && p.length > 0) {
            p = p.slice(0, p.length - 1);
        }
        if (p.length === 0) return p;
    }
    return p;
};

console.log('test 1: ', longestCommonPrefix(["flower","flow","flight"]) === "fl");
console.log('test 2: ', longestCommonPrefix(["dog","racecar","car"]) === "");
