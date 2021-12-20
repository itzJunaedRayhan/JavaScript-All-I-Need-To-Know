//  Create a Extend Function to Reduce Repeating Code
function Extend (parent, child) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}


function Shape (color) {
    this.color = color;
}
Shape.prototype = {
    common : function () {
        return "I am a Common Method";
    }
}




function Square (width, color) {
    //  Inherit color Property from 'Shape' Constructor
    Shape.call(this, color);
    this.width = width;
}

//  Calling Extend Function to Inherit Shape Constructor Prototype
Extend(Shape, Square);

//  create a prototype in Square
Square.prototype.draw = function () {
    return `My Width is : ${this.width}`;
}





function Circle (radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
//  Calling Extend Function to Inherit Shape Constructor Prototype
Extend(Shape, Circle);


//  'common() method' from shape is overriding - Method Overriding
Circle.prototype.common = function () {
    return "I was a common method now i am overridden from Circle";
}

let shape  = new Shape();
let sqrt   = new Square(45, 'Green');
let circle = new Circle(50, 'Red');

var shapes = [shape, sqrt, circle];

for (let i of shapes) {
    console.log(i.common());
}