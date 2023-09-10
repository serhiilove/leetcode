/**
 * Sum elements of array
 * @param arr {number[]}
 * @return {number}
 */
function sumElements (arr){
   return arr.reduce((acc, curr) => {
       console.log(acc, curr);
       return acc + curr;
   });
}

console.log(sumElements([1, 2, 3]));
