//  Method Overriding and Inheritance

class Shape {
    constructor (color) {
        this.color = color;
    }
    draw () {
        console.log('Drawing...');
    }
}

class Rectangle extends Shape {
    constructor (color, width, height) {
        super(color);
        this.width  = width;
        this.height = height;
    }

    calculate () {
        return this.width * this.height;
    }
    //  Method Overriding
    draw () {
        console.log('Rectangle is drawing');
    }
}

let r = new Rectangle('Green', 20, 35);
console.log(r);
r.draw();