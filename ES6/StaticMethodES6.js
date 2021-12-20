
//  Static Method
class Person {
    constructor (name, email) {
        this.name  = name;
        this.email = email;
    }

    print () {
        console.log(this.name, this.email);
    }

    test () {
        console.log(this);
    }

    static create (str) {
        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }
}

let str1 = '{"name" : "Junaed Islam", "email" : "junaedislam96@gmail.com"}';
let p1 = Person.create(str1);
console.log(p1);
console.log(p1 instanceof Person);
p1.print();

p1.test();