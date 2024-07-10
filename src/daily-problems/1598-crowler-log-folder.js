/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let dirLevel = 0;

    logs.forEach(log => {
        if (log !== './' && log !== '../') {
            dirLevel++;
        } else if (log === '../' && dirLevel !== 0) {
            dirLevel--;
        }
    });

    return dirLevel;
};

console.log('test 1:', minOperations(["d1/","d2/","../","d21/","./"]));
console.log('test 2:', minOperations(["d1/","d2/","./","d3/","../","d31/"]));
console.log('test 2:', minOperations(["d1/","../","../","../"]));