//  পলিমরপিজমঃ     ভিন্ন ভিন্ন অবস্থায় একই অবজেক্টের বহুরুপ ধারণ করা বা ভিন্ন ভিন্ন ফল প্রদান করার প্রক্রিয়াকে পলিমরফিজম বলে। 
//  Polymorphism:

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Generic Animal Sound!!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");

a1.makeSound();
a2.makeSound();










//  Another Polymorphism Example:
class Student {
    constructor() {
        var name;
        var marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }

}
var stud = new Student();
stud.setName("John");
stud.setMarks(80);
document.writeln(stud.getName() + " " + stud.getMarks());