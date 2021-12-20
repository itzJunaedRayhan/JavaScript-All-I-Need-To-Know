
//  Private Data With WeakMap();
//  Hide Properties in a Constructor using WeakMap();
//  Getter and Setter


const _radius = new WeakMap();
const _name   = new WeakMap();
const _resize = new WeakMap();  //  _resize became private and it only available in 'Circle Class'
class Circle {
    constructor (radius, name) {
        this.size = 10;
        _radius.set(this, radius);
        _name.set(this, name);
        _resize.set(this, () => {
            console.log(this.size);
        })
    }

    draw () {
        console.log("Drawing...");
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)();
    }

    //  getter
    get radius () {
        return _radius.get(this);
    }

    //  setter
    set radius (value) {
        _radius.set(this, value);
    }

}

let c1 = new Circle(10, "Ragnar");
console.log(c1);
c1.draw();
c1.radius = 200;
console.log(c1.radius);