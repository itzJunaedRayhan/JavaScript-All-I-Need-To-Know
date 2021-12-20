//  Function Expressions
//  Anonymous Function is a function that does not have any name associated with it.
var addition = function (a , b) {
    return a + b;
}



setTimeout(function () {
    console.log("I will be called after 3 seconds");
}, 3000)



var another = addition(10, 40);
console.log(another);