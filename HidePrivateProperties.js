var Rectangle = function (width, height) {
    var position = {
        x : 56,
        y : -100
    }
    this.width = width;
    this.height = height;
    var printProperties = function () {
        console.log('My Width is '+ this.width);
        console.log('This Height is '+ this.height);
    }.bind(this);
    this.draw = function () {
        console.log("I am Rectangle");
        printProperties();
        console.log('Position X = '+ position.x + ' Position Y = '+ position.y);
    }
}

var rect7 = new Rectangle(45, 30);
rect7.draw();
// rect7.printProperties(); //  it will show a Error cause we made it private so we can't run it after Rectangle Function body