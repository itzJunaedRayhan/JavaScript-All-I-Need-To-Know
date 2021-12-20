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

//  Inherit All Prototype of 'Common' to Square Constructor 
Square.prototype = Object.create(Shape.prototype);

//  Reset Square Constructor Property
Square.prototype.constructor = Square;

//  create a prototype in Square
Square.prototype.draw = function () {
    return `My Width is : ${this.width}`;
}



let sqrt   = new Square(45, 'Green');

console.log(sqrt);
console.log(sqrt.draw());
console.log(sqrt.common());