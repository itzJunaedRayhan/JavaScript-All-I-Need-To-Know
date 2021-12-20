//  In JavaScript every function have property which is called prototype and that is point to a object.

//  Prototype Inheritance :- Object Based
    // function Person (name, age) {
    //     this.name = name;
    //     this.age  = age;
    // }

    // Person.prototype = {
    //     eat : function () {
    //         return `${this.name} is Eating`;
    //     },
    //     walk : function () {
    //         return `${this.name} is Walking`;
    //     }
    // }

    // function Cricketer (name, age, type, country) {
    //     Person.call(this, name, age);
    //     this.type    = type;
    //     this.country = country;
    // }

    // Cricketer.prototype = Object.create(Person.prototype);
    // Cricketer.prototype.constructor = Cricketer;


    // let cricketer = new Cricketer("Shakib", 36, "All-Rounder", "Bangladesh");
    // console.log(cricketer);











//  Prototype Inheritance :- Class Based
class Person {
    constructor (name, age) {
        this.name = name;
        this.age  = age;
    }
    eat () {
        return `${this.name} is eating`;    
    }
    walk () {
        return `${this.name} is walking`;
    }
}

class Cricketer extends Person {
    constructor (name, age, role, country) {
        super(name, age);
        this.role = role;
        this.country = country;
    }
    play () {
        console.log(super.eat());
        return `${this.name} is playing`;
    }

    static isEqual (cricketer1, cricketer2) {
        return cricketer1.age === cricketer2.age;
    }
}
let shakib = new Person("Shakib", 35);
let tamim = new Cricketer("Tamim", 36, "Batter", "BD");
console.log(tamim.walk());
console.log(tamim.play());
// console.log(shakib.eat());
// console.log(shakib.play());  Error

//  calling static Method
    console.log(Cricketer.isEqual(shakib, tamim));
