//  Private Data With Symbol
//  Hide Properties in a Constructor using Symbol

const _radius = Symbol();
const _name   = Symbol();
class Circle {
    constructor (radius, name) {
        this[_radius] = radius;
        this[_name]   = name;
    }

    draw () {
        console.log("Drawing...");
    }
}

let c1 = new Circle(10, "Ragnar");
console.log(c1);
console.log(c1._name);  //  undefined; cause now its became Private



//  let's try to access private Properties:
let key  = Object.getOwnPropertySymbols(c1)[0];
console.log(c1[key]);   //  10