//  Problem - null is not working
let a = {a : 10}, b = {b : 20}
//  create a Set
    //  let set = new Set([a, b]);
//  set a = null;
    //  a = null;   //  in Set, null is not working
    //  console.log(set);
    //  let arr = [...set];
    //  console.log(arr[0]);





//  Solution - WeakSet(), where null will work properly
//  WeakSet only takes Object as value and it doesn't take any Primitive data

let weakSet = new WeakSet([a, b]);
a = null;
console.log(weakSet);

//  WeakSet.has()
console.log(weakSet.has(a));
console.log(weakSet.has(b));
