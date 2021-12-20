//  Normal Function
function add (a, b) {
    return a + b;
}
console.log(add(4, 5));

//  With Arrow Function:
let ArrowAdd = (a, b) => a + b;
console.log(ArrowAdd(6, 7));

let sqr = x => x * x;
console.log(sqr(4));