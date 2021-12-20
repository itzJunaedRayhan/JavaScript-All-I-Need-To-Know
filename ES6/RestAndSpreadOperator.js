//  Rest Operator and Spread Operator:
//  when we use three dots in a parameter we can call it rest operator and for the rest of case if we use three dots then we will call it 'Spread Operator';
//  Rest operator must be declare at the end of all parameter.

//  Rest Operator
function sum (name, ...rest) {
    let Name = name;
    let sum = rest.reduce((a, b) => a + b);
    console.log(Name);
    console.log(sum);
}
sum('Junaed', 1, 2, 3, 4, 5);





//  Spread Operator:
//  we cab break a array into a single string or element using Spread Operator
let a = ['Junaed', 'Islam', 'Rayhan'];
console.log(...a);

let obj = {
    a : 10,
    b : 20,
    c : 30
}

let obj2 = {
    ...obj
}

// console.log(obj === obj2);  //  false - cause because of we used spread operator in obj2 so obj2 will create a new object
// console.log(obj2);   
//   in this environment it will show some error but in es6 it will work properly