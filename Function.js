function functionName () {
    console.log("I am Ragnar Lothbrok");
}

function add () {
    var a = 10;
    var b = 20;
    var c = a + b
    console.log("a + b : " + c);
}

function sub () {
    var a = 40;
    var b = 20;
    var c = a - b;
    console.log("a - b : " + c);
}

add();
sub();
// functionName();
// functionName();

for (i = 0; i <= 10; i++) {
    functionName();
}
