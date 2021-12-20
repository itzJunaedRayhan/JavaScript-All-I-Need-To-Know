// var arr = [1, 2, 3, 4, 5, 6];

// var sum = arr.reduce((prev, next) => {
//     return prev + next;
// }, 100)
// console.log(sum);


// var max = arr.reduce ((prev, next) => {
//     return Math.max(prev, next);
// }, 0);
// console.log(max);








var nums = [1, 2, 3, 4, 5, 6];
function myReduce (numbers, cb, acc) {
    for (var i = 0; i < numbers.length; i++) {
        acc = cb (acc, numbers[i]);
    }
    return acc;
}
var sum = myReduce (nums, (prev, next) => {
    return prev + next;
}, nums[0]);


var max = myReduce (nums, (prev, next) => {
   return Math.max(prev, next)
}, nums[0]);


var min = myReduce (nums, (prev, next) => {
    return Math.min(prev, next);
}, nums[0]);

console.log(sum, max, min);