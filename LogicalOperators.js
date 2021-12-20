
var a = 10;
var b = 20;
var c = 30;
var d = 40;

//  Logical AND Operator
if (a > b && c > d) {
    console.log("A is Greater than B and C is greater than D");
} else {
    console.log("At least One condition is false");
}

//  Logical OR Operator
if (a > b || c > d) {
    console.log("A is Greater than B or C is greater than D");
} else {
    console.log("Both of condition are false");
}

//  Logical NOT Operator
var check = !(a > b);
console.log(check)