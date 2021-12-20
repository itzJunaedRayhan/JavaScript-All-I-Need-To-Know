//  Return Statement
function AddAll () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var result = AddAll(10, 20, 30);
console.log(result + 10);




//  Return a Object - Always use Return statement from the last of Function body
function Person (name, email) {
    return {
        Name  : name,
        Email : email
    }
    console.log("I will never be shown");
}
var p1 = Person("Junaed Islam", "junaedrayhan@gmail.com");
console.log(p1)
console.log(p1.Name);