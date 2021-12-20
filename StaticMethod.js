class Square {
    //  Created Constructor method to store multiple Properties and Methods as Object
    constructor (width) {
        this.width  = width;
        this.height = width; 
    }
    //  Static Method:
    static equal (a, b) {
        return a.width * a.height === b.width * b.width;
    }
    //  Another Static Method:
    static isValidDimension (width, height) {
        return width === height;
    }
}
let square1 = new Square(8);    //  a
let square2 = new Square(9);    //  b
//  access first static method named 'equal':
console.log(Square.equal(square1, square2));


//  access second static method named 'isValidDimension':
console.log(Square.isValidDimension(10, 10));
