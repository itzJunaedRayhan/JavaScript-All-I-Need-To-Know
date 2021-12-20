//  Object Create:
const bookProto = {
    getSummary : function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge     : function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

//  First Way
    const book1  = Object.create(bookProto);
    book1.title  = 'Maa';
    book1.author = 'Maxim Gorki';
    book1.year   = 1999;
    console.log(book1);


//  Second Way
const book2 = Object.create(bookProto, {
    title : {value: 'Crime and Punishment'},
    author: {value: 'Fyodor Dostoevsky'},
    year : {value : 1966}
})
console.log(book2);