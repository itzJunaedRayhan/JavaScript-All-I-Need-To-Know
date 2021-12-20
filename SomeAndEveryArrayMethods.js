//  some() :- Check only minimum one value passes the condition.
let ages = [10, 13, 15, 18, 2];
let some = ages.some(age => age >= 18);
console.log(some);



//  every() :- Check all the elements in array passes the condition or not.
//  let nums  = [20, 20, 20, 20, 20];
let nums  = [20, 20, 10, 20, 20];
let every = nums.every(num => num >= 20);
console.log(every);