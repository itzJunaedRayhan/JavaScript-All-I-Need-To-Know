//  Object inheritance

//  Creating Common Object for all
    // let Common = {
    //     eat  : function () {
    //         return "I am Eating"
    //     },
    //     walk : function () {
    //         return "I am Walking";
    //     },
    //     play : function () {
    //         return "I am Playing";
    //     }
    // }

    // function Person (name, age, height) {
    //     let person = Object.create(Common);
    //     person.name = name;
    //     person.age  = age;
    //     person.height = height;
    //     return person;
    // }
    // let John = Person("John", 22, "5.5 feet");
    // let Doe  = Person("Doe", 26, "6.1 feet");










//  Prototype
    // function Person (name, age, height) {
    //     let person = Object.create(Person.prototype);
    //     person.name = name;
    //     person.age  = age;
    //     person.height = height;
    //     return person;
    // }
    // Person.prototype = {
    //     eat  : function () {
    //         return "I am Eating"
    //     },
    //     walk : function () {
    //         return "I am Walking";
    //     },
    //     play : function () {
    //         return "I am Playing";
    //     }
    // }
    // let John = Person("John", 22, "5.5 feet");
    // let Doe  = Person("Doe", 26, "6.1 feet");





//  Constructor
    // function Person (name, age, height) {
    //     this.name = name;
    //     this.age  = age;
    //     this.height = height;
    // }
    // Person.prototype = {
    //     eat  : function () {
    //         return "I am Eating"
    //     },
    //     walk : function () {
    //         return "I am Walking";
    //     },
    //     play : function () {
    //         return "I am Playing";
    //     }
    // }
    // let John = new Person("John", 22, "5.5 feet");
    // let Doe  = new Person("Doe", 26, "6.1 feet");





//  class
    // class Person {
    //     constructor (name, age, height) {
    //         this.name = name;
    //         this.age  = age;
    //         this.height = height;
    //     }

    //     eat  () {
    //         return "I am Eating"
    //     };

    //     walk () {
    //         return "I am Walking";
    //     };

    //     play () {
    //         return "I am Playing";
    //     };
    // }
    // let John = new Person("John", 22, "5.5 feet");
    // let Doe  = new Person("Doe", 26, "6.1 feet");









//  Prototypical Inheritance in Constructor Function
    // function Person (name, age, height) {
    //     this.name = name;
    //     this.age  = age;
    //     this.height = height;
    // }
    // Person.prototype = {
    //     eat  : function () {
    //         return `${this.name} am Eating`;
    //     },
    //     walk : function () {
    //         return `${this.name} am Walking`;
    //     }
    // }

    // function Cricketer (name, age, height, role) {
    //     Person.call(this, name, age, height);
    //     this.role = role;
    // }
    // Cricketer.prototype = Object.create(Person.prototype);
    // Cricketer.prototype.constructor = Cricketer;
    // Cricketer.prototype.play = function () {
    //     return `${this.name} am playing`;
    // }


    // let John = new Person("John", 22, "5.5 feet");
    // let Doe  = new Cricketer("Doe", 26, "6.1 feet", "Batsman");

    // console.log(John);
    // console.log(Doe);
    // console.log(Doe.walk());
    // console.log(Doe.eat());
    // console.log(Doe.play());
    // console.log(John.play());










//  Prototypical Inheritance in Class
    // class Perosn {
    //     constructor (name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    //     eat () {
    //         return `${this.name} is eating`;
    //     }
    // }

    // class Cricketer extends Perosn {
    //     constructor (name, age, type, country) {
    //         super(name, age);
    //         this.type = type;
    //         this.country = country;
    //     }
    //     play () {
    //         return `${this.name} is playing`;
    //     }
    // }

    // let sakib = new Cricketer("sakib", 35, "All-Rounder", "Bangladesh");
    // console.log(sakib.play());

    // let tamim = new Perosn("Tamim", 35);
    // console.log(tamim.eat());

    // console.log(tamim);











//  Mixin 
    function Mixing (target, ...sources) {
        Object.assign(target, ...sources);
    }

    let CanWalk = {
        walk : function () {
            return "Walking....";
        }
    }

    let CanEat = {
        eat : function () {
            return "Eating...";
        }
    }

    let CanSwim = {
        swim : function () {
            return "Swimming...";
        }
    }

    function Person (name) {
        this.name = name;
    }
    Mixing(Person.prototype, CanWalk, CanEat);
    let person = new Person("John");
    console.log(person);



    function GoldFish (name) {
        this.name = name;
    }
    Mixing(GoldFish.prototype, CanEat, CanSwim);
    let fish = new GoldFish("Nemo");
    console.log(fish);