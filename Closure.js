//  Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope

//  able to remember and access it's lexical scope

//  when that function executing outside it's lexical scope


//  First Example of Closure
function test () {
    var msg = "I am Learning Lexical Scope and Closure";

    function sayMsg () {
        console.log(msg)
    }
    sayMsg ()
}
test();





//  Second Example of Closure
function test1 () {
    var message = "Allah Mohan";
    console.log("Ami Junaed");
    return function () {
        console.log(message);
    }
}

var result = test1();
console.log(result());