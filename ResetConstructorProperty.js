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

//  Reset Square Constructor Property
Square.prototype.constructor = Square;

//  create a prototype in Square
Square.prototype.draw = function () {
    return `My Width is : ${this.width}`;
}



let shape  = new Shape();
let sqrt   = new Square(45);

console.log(shape);
console.log(sqrt.draw());
console.log(sqrt.common());