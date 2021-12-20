//  Constructor will run when the object is created!
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

    revise (newYear) {
        this.year    = newYear;
        this.revised = true;
    }


    static topBookStore () {
        return 'Barnes & Noble';
    }
}

//  Initiate Object
const book3 = new Book('The Alchemist', 'Paulo Kuelho', '2002');
console.log(book3.getSummary());
book3.revise(2012);
console.log(book3);  

//  access Static Function:
console.log(Book.topBookStore());