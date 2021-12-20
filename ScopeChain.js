//  Scope Chian

var a = 11;

function A () {
    var b = 12;
    function B () {
        var c = 23;
        console.log(c)
    }

    function C () {
        var d = 56;
        console.log(d)
    }

    console.log(b);
    D(b);
    B();
    C();
}

function D (n) {
    return n + 2;
}

A();