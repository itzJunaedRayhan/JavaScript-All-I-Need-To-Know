//  Constructor ফাংশনের এর মধ্যে যা থাকবে তা Instance Member বলে।
//  Prototype এর মধ্যে যা থাকবে তাকে Prototype Member বলে।

//  Constructor Function
function Square (width) {
    //  Instance Member
    this.width = width;
}
//  Prototype
Square.prototype = {
    //  Prototype Members
    draw : function () {
        console.log('Draw')
    },
    //  'toString()':- Constructor Property Overriding
    toString : function () {
        console.log(`My Width is: ${this.width}`);
    }
}

let sqrt1 = new Square(10);
let sqrt2 = new Square(5);

console.log(sqrt1);
console.log(sqrt2);

sqrt1.draw()
sqrt2.draw()
sqrt1.toString()
sqrt2.toString()