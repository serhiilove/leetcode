/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanSymbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const arr = s.split('');
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1 || romanSymbols[arr[i]] >= romanSymbols[arr[i + 1]]) {
            sum = sum + romanSymbols[arr[i]];
        } else {
            sum = sum + (romanSymbols[arr[i + 1]] - romanSymbols[arr[i]]);
            i++;
        }
    }
    return sum;
};

console.log('test 1: ', romanToInt("III") === 3);
console.log('test 2: ', romanToInt("LVIII") === 58);
console.log('test 3: ', romanToInt("MCMXCIV") === 1994);

