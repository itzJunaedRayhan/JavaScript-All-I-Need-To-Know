//  new Class Syntax
class Rectangle {
    constructor (width, height) {
        this.width  = width;
        this.height = height;
    }
    draw () {
        console.log('I am Drawing...');
    }
}

let rect = new Rectangle(45, 65);
console.log(rect);