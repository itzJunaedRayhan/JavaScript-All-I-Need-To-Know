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
    //  get and set private properties or values - where "position" object is private and we make it public and also changed its value from outside of Rectangle Object
    Object.defineProperty(this, 'position', {
        get : function () {
            return position;
        },
        set : function (value) {
            return position = value;
        }
    })
}

var rect7 = new Rectangle(45, 30);
rect7.draw();
rect7.position = {
    x : 16,
    y : 10
}
console.log(rect7.position);