/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let waitingTime = 0;
    let shift = 0;

    for (let i= 0; i < customers.length; i++) {
        let currWaitingTime= customers[i][1] + shift;
        waitingTime += currWaitingTime;
        let readyTime = customers[i][0] + currWaitingTime;

        shift = i < customers.length - 1 && readyTime > customers[i+1][0]
            ? readyTime - customers[i+1][0]
            : 0;
    }

    return waitingTime / customers.length;
};

console.log('test 1:', averageWaitingTime([[1,2],[2,5],[4,3]]));
console.log('test 2:', averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]));