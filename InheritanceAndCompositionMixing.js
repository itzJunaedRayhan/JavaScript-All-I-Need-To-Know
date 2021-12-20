function Mixing (target, ...sources) {
    Object.assign(target, ...sources);
}

let canWalk = {
    walk : function () {
        return 'Walking...'
    }
}

let canEat = {
    eat : function () {
        return 'Eating...'
    }
}

let canSwim = {
    swim : function () {
        return 'Swimming...'
    }
}

function Person (name) {
    this.name = name;
}
Mixing(Person.prototype, canWalk, canEat);

function GoldFish (name) {
    this.name = name;
}
Mixing(GoldFish.prototype, canEat, canSwim);


let person = new Person("John Doe");
let fish   = new GoldFish("Nemo");
console.log(person);
console.log(fish);