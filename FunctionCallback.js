//  Callback Function
function sample (a, b, cb) {
    var c = a + b;
    var d = a - b;
    var result = cb(c, d);
    return result;
}

function sum (x, y) {
    return x + y;
}

var result = sample(5, 8, sum);
console.log(result);



function sub (x, y) {
    return x - y;
}
var result2 = sample(5, 8, sub);
console.log(result2);


// function mul (x, y) {
//     return x * y;
// }
var result3 = sample(5, 8, (x, y) => x * y);        //  using Callback Function () => {}
console.log(result3)