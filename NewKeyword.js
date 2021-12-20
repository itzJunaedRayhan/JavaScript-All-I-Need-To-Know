/*
New Keyword does 4 things:
    1.  Create a Empty Object
    2.  Associate with Function Arguments, Object Properties and Method to this Empty Object || Bind Constructor Function with "this"
    3.  Copied all the Prototype in this Constructor Function to this Empty Object that was created.
    4.  Finally Return this Object.
*/

//  Create a Empty Object

//  কনস্ট্রাক্টর ফাংশনের সকল Properties, Arguments এবং Methods গুলো যেগুলোতে "This" Keyword ব্যবহার করা হয়েছে সেগুলোকে বাইন্ড করে Empty Object এ রাখে। New Keyword কনস্ট্রাক্টরের সাথে ’This’ কে Bind করে

//  একটা কনস্ট্রাক্টর ফাংশনের সকল প্রটোটাইপগুলোকে কপি করে Empty Object এ রাখে।

//  কনস্ট্রাক্টর ফাংশনটাকে বা অবজেক্টটাকে রিটার্ন করে।



//  Using "new" keyword in Constructor Function
//  Constructor Function
let Rectangle = function (width, height) {
    this.width  = width;
    this.height = height;
    this.draw   = function () {
        console.log("I am a Rectangle");
        printProperties();
        console.log(this);
    }
    let printProperties = function () {
        console.log('My Width is :' + width);
        console.log('My Height is :' + height);
    }
}
var rect = new Rectangle(10, 20);
rect.draw();





//  Using "new" keyword in Constructor Function
//  Let's Create a Constructor Function without 'new' Keyword
function myNew (constructor) {
    //  Creating a Empty Object like new keyword does.
    let obj = {};
   
    //  Coping all prototype of constructor function to Empty object like new keyword does.
    Object.setPrototypeOf(obj, constructor.prototype);
    
    //  Put all of arguments of constructor function to empty object like new keyword does.
    let argsArray = Array.prototype.slice.apply(arguments);
        //  console.log(`Get Argument List: ${argsArray.slice(1)}`);
    constructor.apply(obj, argsArray.slice(1));
    
    //  Finally Return this constructor function or Object like New keyword does.
    return obj;
}

let rect1 = myNew(Rectangle, 45, 50);
rect1.draw();
