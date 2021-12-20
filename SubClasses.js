//  Class
class Book {
    constructor (title, author, year) {
        this.title  = title;
        this.author = author;
        this.year   = year;
        this.getAge = function () {
            const years = new Date().getFullYear() - this.year;
            return `${this.title} is ${years} years old`;
        }
    }

    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
//  Magazine SubClass:
class Magazine extends Book {
    constructor (title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//  Initiate Magazine:
const mag1 = new Magazine('Crime and Punishment','Fyodor Dostoevsky', 1966, 'Feb');
console.log(mag1);
console.log(mag1.getSummary());