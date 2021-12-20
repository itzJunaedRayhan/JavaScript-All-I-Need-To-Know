//  Inheritance 
    //  Create Book Constructor
    function Book (title, author, year) {
        this.title  = title;
        this.author = author;
        this.year   = year;
    }
//  Create Book Prototype
    Book.prototype.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }


    

//  Create Magazine Constructor and Inherit Book Constructor
    function Magazine (title, author, year, month) {
        Book.call(this, title, author, year, month);
        this.month = month;
    }


//  Prototype Inherit from Book Object
    Magazine.prototype = Object.create(Book.prototype);

//  Use Magazine Constructor instead of Book Constructor
    Magazine.prototype.constructor = Magazine;


    
//  Initiate Magazine Object
    const mag1 = new Magazine('Magazine One', 'John Peter', 2021, 'January');
    
    console.log(mag1);