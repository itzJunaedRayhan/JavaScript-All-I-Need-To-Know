//  Execution Context work like a LIFO system
function a () {
    b();
    console.log("I am function A");
}

function b () {
    d();
    console.log("I am Function B");
}

function c (){
    console.log("I am Function c");
}

function d () {
    c();
    console.log("I am Function D");
}

var x = 100;
a();
console.log("I am Global");