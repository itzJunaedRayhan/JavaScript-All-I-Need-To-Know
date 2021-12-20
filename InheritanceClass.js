//  ইনহেরিটেন্সঃ      অবজেক্ট অরিয়েন্টেড পদ্ধতিতে একটি ক্লাস প্রয়োজনে আরেকটি ক্লাসের বৈশিষ্ট ধারন করার প্রক্রিয়াকে ইনহেরিটেন্স বলে।
//  Inheritance

class Person {
    constructor (name, age) {
        this.name  = name;
        this.age   = age;
    }

    describe () {
        console.log(`I am ${this.name} and My age is ${this.age}`);
    }
}

class Programmer extends Person {
    constructor (name, age, yearOfExperience) {
        super(name, age);
        this.experience = yearOfExperience;
    }

    code () {
        console.log(`${this.name} is Coding`);
    }
}


const programmers = [
    new Programmer("Dom", 56, 12),
    new Programmer("Jeff", 24, 4)
]

function developSoftware (programmers) {
    for(programmer of programmers) {
        programmer.code();
    }
}
developSoftware(programmers);




//  const person = new Person ("Junaed", 22);
//  const programmer = new Programmer ("Ragnar", 30, 4);

// console.log(person.describe());
// console.log(programmer.describe());

// console.log(person.code());  //  Error
// console.log(programmer.code());