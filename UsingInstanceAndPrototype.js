//  Using Instance and Prototype

//  Constructor Function
function Square (width) {
    //  Instance Member
    this.width = width;
    this.getWidth = function () {
        console.log(`My Width is: ${this.width}`);
        //  this.draw();
    }
}
//  Prototype
Square.prototype = {
    //  Prototype Members
    draw : function () {
        console.log('Draw');
        this.getWidth();
    },
    //  'toString()':- Constructor Property Overriding
    toString : function () {
        console.log(`My Width is: ${this.width}`);
    }
}

let sqrt1 = new Square(10);
let sqrt2 = new Square(5);

// console.log(sqrt1);
// console.log(sqrt2);

// sqrt1.getWidth()
// sqrt2.getWidth()

sqrt1.draw();
sqrt2.draw();