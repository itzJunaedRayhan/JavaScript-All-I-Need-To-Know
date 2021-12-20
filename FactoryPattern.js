//  Factory Pattern
var createRect = function (width, height) {
    return {
        width   : width,
        height  : height,
        draw    : function () {
            console.log("I am Rectangle");
            this.printProperties();
            console.log(this);
        },
        printProperties : function () {
            console.log("My Width is " + this.width);
            console.log("My Height is " + this.height);
        }
    }
}

var rect1 = createRect(18, 8);
var rect2 = createRect(48, 30);
rect1.draw();
rect2.draw();