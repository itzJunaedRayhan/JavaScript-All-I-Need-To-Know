//  you have must add "class properties" plugin from babel to run this code without any Error
//  class properties

class Rectangle {
    constructor (width, height) {
        this.width   = width;
        this.height  = height;
        this.another = function () {
            console.log("I am a Another function...");
        }
    }
    draw () {
        console.log('I am Drawing...');
    }

    //  if we use 'class-properties' than we can add property and value from here.
    name = 'John Smith';
    test = function () {
        console.log("I am a test function i can run without error if 'class property installed from babel'");
    }

}

let rect = new Rectangle(45, 65);
console.log(rect);
rect.draw();