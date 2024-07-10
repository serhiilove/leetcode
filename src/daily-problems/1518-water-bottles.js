/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drunkBottles = 0;
    let emptyBottles = 0;
    let fullBottles = numBottles;

    do {
        drunkBottles += fullBottles; // drink
        emptyBottles +=  fullBottles // collect empty

        fullBottles = Math.trunc(emptyBottles / numExchange); // exchange
        emptyBottles = emptyBottles % numExchange; // exchange rest

    } while (fullBottles + emptyBottles >= numExchange);

    return drunkBottles + fullBottles;
};

// console.log('test 1:', numWaterBottles(9, 3));
console.log('test 2:', numWaterBottles(15, 4));