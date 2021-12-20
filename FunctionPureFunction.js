//  What is Pure Function?
    //  `* It Returns the same results if same Arguments given *`
    //  `* It does not cause any observable side effects *`



//  Example of Pure function - It maintaince 2 Rules
    function sqr (n) {
        return n * n;
    }
    console.log(sqr(3));
    console.log(sqr(3));
    console.log(sqr(3));




//  It is not a pure function cause it is not maintain second rules - and its impected variable values
    var x = 10;
    function change () {
        x = 100;
    }
    change();
    console.log(x);




//  It is not a pure function cause it is not maintain second rules - and its impected Object Properties values after function execution
    var point = {
        x : 45,
        y : 30
    }
    console.log(point)
    function printPoint (point) {
        point.x = 100;
        point.y = 200;
        console.log(point);
    }
    printPoint(point);
    console.log(point);