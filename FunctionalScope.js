// var str = 'abc';

// if (true) {
//     if (true) {
//         var b = 'I am B';
//         console.log("I am "+ str +" From Nested If condition")
//     }
// }
// console.log(b + " from Nested If Condtion");



//  First Example of Functional Scope
    // var a = 30;
    // function x () {
    //     var a = 20;
    //     function y () {
    //         var a = 10;
    //         console.log("I am " + a + " From inner of 'y' Function");
    //     }
    //     console.log("I am " + a + " Fron outer of 'y' function");
    //     y();
    // }
    // x();




//  Second Example of Functional Scope
    function test (n) {
        function a () {
            return n%3 === 0;
        }

        function b () {
            return n%5 === 0;
        }

        if (a() && b()) {
            console.log(n + ' is divisible by both 3 and 5');
        } else {
            console.log("Not a Valid Number")
        }
    }
    test(15);