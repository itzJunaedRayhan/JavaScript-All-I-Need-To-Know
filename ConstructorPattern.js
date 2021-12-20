//  Constructor Pattern

var Rectangle = function (height, width) {
    this.height = height;
    this.width  = width;
    this.draw   = function () {
        console.log("I am a Rectangle");
        this.printProperties();
        console.log(this);
    };
    this.printProperties = function () {
        console.log("My Height is : "+ this.height);
        console.log("My Width is: "+ this.width);
    }
}

var rect4 = new Rectangle(18, 8);
rect4.draw();




function myNew (constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}

var rect4 = myNew(Rectangle, 45, 30);
rect4.draw();