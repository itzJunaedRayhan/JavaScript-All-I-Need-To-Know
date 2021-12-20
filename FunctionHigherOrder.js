//  Higher Order Function
function add (x, y) {
    return x + y;
}
function manipulate (a , b, func) {
    c = a + b;
    d = a - b;
    
    return function () {
        var m = func (a, b)
        return c * d * m;
    }
}
var result = manipulate(3, 4, add);
console.log(result());