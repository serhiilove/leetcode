const Stack = require("../data_structures/stack");

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const openBrackets = '([{';
    const closeBrackets = ')]}';

    const stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        if (openBrackets.indexOf(s[i]) >= 0) {
            stack.push(openBrackets.indexOf(s[i]))
        } else if (closeBrackets.indexOf(s[i]) === stack.peek()) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.isEmpty();
};

console.log('test 1: ', isValid('()') === true);
console.log('test 2: ', isValid('()[]{}') === true);
console.log('test 3: ', isValid('(]') === false);
console.log('test 4: ', isValid('{[]}') === true);
console.log('test 5: ', isValid('[') === false);


