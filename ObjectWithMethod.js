var rect = {
    height : 100,
    width  : 50,
    draw   : function () {
        console.log("I am a Rectangle");
        console.log("My Height is : "+ this.height);
        console.log("My Width is : "+ this.width);
    }
}

rect.draw();

rect.width = 150;

rect.draw();