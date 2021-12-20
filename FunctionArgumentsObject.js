//  arguments Object - We can use arguments with having Parameter in Function Body

function test () {
    //  console.log(arguments);
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(10, 20, 30)





//  Sum of All Arguments
function addAll () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("The sum of all Arguments is: " + sum);
}
addAll(1, 2, 3);
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9);