function Person (name) {
    this.name = name;
}
Person.prototype.PI = 3.1416;

let person1 = new Person("Junaed Islam");
let person2 = new Person("Junaed");

console.log(person1);
console.log(person2);

//  Some different ways to get Prototype
    let p1 = Object.getPrototypeOf(person1);
    let p2 = person1.__proto__;
    let p3 = Person.prototype;
    
    if (p1 === p2 && p1 === p3 && p2 === p3) {
       // console.log("Both Prototype are same");
    }
    // console.log(p1);
    // console.log(p2);
    // console.log(p3);
    