//  Prototype
    //  Create Book Constructor:
    function Book (title, author, year) {
        this.title  = title;
        this.author = author;
        this.year   = year;
    }

    //  Create Get Summary Prototype:
    Book.prototype.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    //  Create Get Age Summary Prototype:
    Book.prototype.getAge = function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }

    //  Update or Change Year in Book Constructor from here
    Book.prototype.revise = function (newYear) {
        this.year = newYear;
        this.revised = true;
    }

    //  initiate an Object
    const book1 = new Book('Book One', 'John Doe', 2013);
    const book2 = new Book('Book Two', 'Jane Done', 2016);


    console.log(book2);
    console.log(book2.getAge());
    book2.revise(2021);
    console.log(book2);
