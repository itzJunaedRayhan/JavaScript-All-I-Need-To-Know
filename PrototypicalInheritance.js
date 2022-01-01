//  shape -> Shape -> Object
//  sqrt -> Square -> Object
//  sqrt -> Square -> shape -> Object

function Shape () {

}
Shape.prototype = {
    common : function () {
        return "I am a Common Method";
    }
}




function Square (width) {
    this.width = width;
}

//  Inherit All Prototype of 'Common' to Square Constructor 
Square.prototype = Object.create(Shape.prototype);

//  create a prototype in Square
Square.prototype.draw = function () {
    return `My Width is : ${this.width}`;
}



function Circle () {

}
//  Inherit All Prototype of 'Common' to Circle Constructor 
Circle.prototype = Object.create(Shape.prototype);

//  Create a prototype in in Circle
Circle.prototype.about = function () {
    return "I am from Circle";
}

let shape  = new Shape();
let sqrt   = new Square(45);
let circle = new Circle();

// console.log(shape);
// console.log(sqrt.draw());
// console.log(sqrt.common());
console.log(circle);
console.log(circle.common());
console.log(circle.about());