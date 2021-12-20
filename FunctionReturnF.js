//  Return a Function

// function greet (msg) {
//     function greeting (name) {
//         return msg + " "+ name + "!";
//     }
//     return greeting;
// }

// var ga  = greet ("Good Afternoon");
// var gm  = greet ("Good Morning");
// var gn = greet ("good night");
// var message = ga("Junaed");
// console.log(message);

// console.log(gm("Ragnar"));
// console.log(gn("Bjorn"));



function base (b) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result = result * n;
        }
        return result;
    }
}

var base10 = base(10);
console.log(base10(2));

var base5 = base(5);
console.log(base5(3));
console.log(base5(2));
console.log(base5(5));