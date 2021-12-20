//  1.  Object Literal:
    // let Person = {
    //     name    : 'Johnny Depp',
    //     age     : 30,
    //     height  : '6 feet',
    //     summary : function () {
    //         console.log(`My Name is: ${this.name} and my age is: ${this.age} and my height is : ${this.height}`);
    //     }
    // }
    // console.log(Person)
    // Person.summary();



//  2. Factory Pattern:
    // const Person = function (name, age, height) {
    //     return {
    //         name : name,
    //         age  : age,
    //         height: height,
    //         summary : function () {
    //             console.log(`My Name is: ${this.name} and my age is: ${this.age} and my height is : ${this.height}`);
    //         }
    //     }
    // }
    // const person = new Person("Ryan Reynold", 28, "5.8 feet");
    // console.log(person);
    // person.summary();



//  3. Constructor Pattern:
    //  "new" keyword create a empty object '{}' and Refer all of 'this' keyword property and method to this empty object and Finally Return this constructor object.
    //  without "new" keyword, then "this" keyword will Refer to window object.
    //  Constructor Pattern of Object
    // function CircleCreate (radius) {
    //     this.radius = radius,
    //     this.draw = function () {
    //         return `Constructor Pattern : ${this.radius}`;
    //     }
    // }
    // const ConstructorPattern = new CircleCreate(1);
    // console.log(ConstructorPattern.draw());



//  4. Object.Create()
    // const Person = {
    //     getSummary : function () {
    //         console.log(`My Name is: ${this.name} and my Birth year is: ${this.birthday} and my height is : ${this.height}`);
    //     },
    //     getAge : function () {
    //         console.log(`My age is: ${new Date().getFullYear() - this.birthday}`);
    //     }
    // }
    // const person = Object.create(Person);
    // person.name = "Junaed";
    // person.birthday = "1999";
    // person.height = "5.5 feet";
    // console.log(person);
    // person.getAge();
    // person.getSummary();

    // const person = Object.create(Person, {
    //     name : {value: "Junaed"},
    //     birthday: {value: 1999},
    //     height: {value: '5.5 feet'}
    // })
    // console.log(person)
    // person.getSummary();
    // person.getAge();





//  5.Prototype
    // const Person = function (name, age, height) {
    //     this.name    = name;
    //     this.age     = age;
    //     this.height  = height;
    // }
    // Person.prototype.getSummary = function () {
    //     return `My Name is: ${this.name} and my age is: ${this.age} and my height is : ${this.height}`;
    // } 
    // Person.prototype.revise = function () {
    //     this.name = "Ragnar Lothbroke";
    //     this.age  = 30;
    //     this.height = "5.7 feet";
    //     this.revised = true;
    // }
    // const person = new Person("Johnson", 40, '6.5 feet');
    // console.log(person)
    // console.log(person.getSummary());
    // person.revise();
    // console.log(person)




//  6.Object Inheritance - Prototype Inheritance:
    // let Book = function (name, writer, year) {
    //     this.name = name;
    //     this.writer = writer;
    //     this.year = year;
    // }
    // Book.prototype.getSummary = function () {
    //     return `${this.name} was written by - ${this.writer} in - ${this.year}`;
    // }


    // let Magazine = function (name, writer, year, month) {
    //     Book.call(this, name, writer, year);
    //     this.month = month;
    // }
    //  Prototype Inheritance
    // Magazine.prototype = Object.create(Book.prototype);
    
    // const magazineObj = new Magazine("Maa", "Maxim Gorki", 1967, "February");
    // Magazine.prototype.constructor = Magazine;

    // console.log(magazineObj)
    // console.log(magazineObj.getSummary());




//  7.class
    // class Person {
    //     constructor (name, birthday, height) {
    //         this.name = name;
    //         this.birthday  = birthday;
    //         this.height = height;
            
    //         this.getAge = function () {
    //             return `my age is ${new Date().getFullYear() - this.birthday}`;
    //         }
    //     }
    //     getSummary () {
    //         return `My Name is: ${this.name} - and my birthday is: ${this.birthday} - and my height is : ${this.height}` ;
    //     }

    //     revise (newYear) {
    //         this.birthday = newYear;
    //         this.revised = true;
    //     }

    //     static myName () {
    //         return `My name is Bond, James Bond`;
    //     }
    // }
    // const person = new Person ("Junaed Islam", 1999, "5.5 feet");
    // console.log(person.getAge());
    // console.log(person.getSummary());
    // console.log(Person.myName());
    // person.revise(1998);
    // console.log(person);




    //  8. Class inheritance
    // class Book {
    //     constructor (title, author, year) {
    //         this.title  = title;
    //         this.author = author;
    //         this.year   = year;
    //     }
    //     getSummary = function () {
    //         return `${this.title} was written by ${this.author} in ${this.year}`;
    //     }
    // }
    // Book.prototype.text = function () {
    //     return `I am a Prototype of Book Function`;
    // }


    // class Magazine extends Book {
    //     constructor (title, author, year, month) {
    //         super(title, author, year);
    //         this.month = month;
    //     }
    //     code() {
    //         console.log(`My Book Name is ${this.title}`);
    //     }
    // }
    
    // const programmers = [
    //     new Magazine("The Alchemist", "Paulo Coelho", 1967, "February"),
    //     new Magazine("Maa", "Maxim Gorki", 1975, "January")
    // ]

    // function Obj (programmers) {
    //     for (programmer of programmers) {
    //         console.log(programmer.getSummary());
    //     }
    // }
    // Obj(programmers);





//  9.Abstraction:
    // function Employee (name, age, baseSalary) {
    //     this.name = name;
    //     this.age  = age;
    //     this.baseSalary = baseSalary;
    //     let MonthlyBonus = 1500;

    //     let CalculateFinalSalary = function () {
    //         return `Total Salary : ${baseSalary + MonthlyBonus}`;
    //     }

    //     this.employeeHistory = function () {
    //         return `Name is : ${this.name} - age is ${this.age} - total salary is: ${CalculateFinalSalary()}`;
    //     }
    // }

    // const employee = new Employee ("Junaed", 22, 15000);
    // console.log(employee.employeeHistory())




//  10.Encapsulation:
    // class Person {
    //     constructor (name, birthday, profession) {
    //         this.name = name;
    //         this.birthday = birthday;
    //         this.profession = profession;
    //     }
    //     getName () {
    //         return `My Name is: ${this.name}`;
    //     }

    //     getBirthday () {
    //         return `My Birthday is: ${this.birthday}`;
    //     }

    //     getProfession () {
    //         return `My profession is: ${this.profession}`;
    //     }
    // }
    // const person = new Person("Junaed", "17 Feb 1999", "Freelancer");
    // console.log(person.getName());
    // console.log(person.getBirthday());
    // console.log(person.getProfession());





//  11.polymorphism:
    // class Animal {
    //     constructor (name) {
    //         this.name = name;
    //     }
    //     getSound () {
    //         console.log(`Common Animal Sound for all`)
    //     }
    // }

    // class Dog extends Animal {
    //     constructor (name) {
    //         super(name);
    //     }
    //     getSound () {
    //         super.getSound();
    //         console.log(`${this.name}: Bau Bau!`);
    //     }
    // }

    // class Cat extends Animal {
    //     constructor (name) {
    //         super(name);
    //     }
    //     getSound(){
    //         console.log(`${this.name}: Mew Mew!`)
    //     }
    // }
    // const animal = new Animal("jeff")
    // const dog = new Dog("dog");
    // const cat = new Cat("Cat");
    // animal.getSound();
    // dog.getSound();
    // cat.getSound();



//  12.Getters and Setters:
    // class Person {
    //     constructor (name, birthday, height) {
    //         this.name = name;
    //         this.birthday = birthday;
    //         this.height = height;
    //     }
    //     get Revise () {
    //         return `My Birthday is : ${this.birthday}`;
    //     }
    //     set Revise (value) {
    //         this.birthday = value;
    //         this.revised = true;
    //     }
    // }

    // const person = new Person("Junaed", 1999, "5.5 feet");
    // person.Revise = 1990;
    // console.log(person.Revise)
    // console.log(person);



    // class Square {
    //     constructor (width, height) {
    //         this.width = width;
    //         this.height = height;
    //         this.NumberOfRequestForArea = 0;
    //     }
    //     get area () {
    //         this.NumberOfRequestForArea++;
    //         const area = this.width * this.height;
    //         console.log(`Area is: ${area}`)
    //     }
    //     set area (value) {
    //         this.width = Math.sqrt(value);
    //         this.isValid = true;
    //     }
    // }
    // const sqrt = new Square (5, 4);
    // sqrt.area = 64;
    // console.log(sqrt);
    // sqrt.area
    // sqrt.area
    // sqrt.area
    // sqrt.area
    // console.log(sqrt);






    
//  13.Enumerating or Traverse Object Properties (for in, If in, Object.keys, Object.values);
    let Person = function (name, age, height, birthday) {
        this.name = name;
        this.age  = age;
        this.height = height;
        this.birthday = birthday;

        this.getSummary = function () {
            console.log(`My name is : ${this.name} - My age is : ${this.age} and my height is : ${this.height}`);
        }
    }
    let person = new Person("Junaed", 22, "5.5 feet", 1999);
    console.log(person);
    
    // let keys = Object.keys(person);
    // console.log(keys);
    // let values = Object.values(person);
    // console.log(values);

    //  get all property
    for (key in person) {
        if (typeof person[key] !== 'function')
        console.log(key, person[key]);
    }

    //  check the property exist or not
    if ('height' in person) {
        console.log(true)
    }