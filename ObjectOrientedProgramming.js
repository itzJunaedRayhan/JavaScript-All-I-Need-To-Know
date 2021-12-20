// Every Object in JavaScript has a constructor property that references the function that was used to create that object.

//  In JavaScript Function are special kind of Object cause in Function we can add Properties and Methods also we can store a function into a variable, function has call,bind and apply and Prototypes like object.

//  Primitive are copied by there value and on the other side Object are copied by there Reference.

//  Primitive       =>  Number, String, Boolean, Symbol, Undefined, Null
//  Non Primitive or Reference      =>  Object, Array, Function


//  "new" keyword create a empty object '{}' and Refer all of 'this' keyword property and method to this empty object and Finally Return this constructor object.


//  ইনহেরিটেন্সঃ      অবজেক্ট অরিয়েন্টেড পদ্ধতিতে একটি ক্লাস প্রয়োজনে আরেকটি ক্লাসের বৈশিষ্ট ধারন করার প্রক্রিয়াকে ইনহেরিটেন্স বলে।

//  অ্যাবস্ট্রাকশনঃ     ডাটা অ্যাবস্ট্রাকশন হলো এমন এক ধরনের ডাটা টাইপ বর্ণনা কেীশল যেখানে কিছু ডাটা থাকে এবং ঐ ডাটা এক্সেস করার জন্য কতগুলো ফাংশন থাকে।

//  এনক্যাপসুলেশনঃ   যে প্রক্রিয়ায় ডাটা ও ফাংশন গুলোকে একত্রিত করে ক্লাস তৈরি করা যায় এবং ডাটা এবং ফাংশন গুলোকে বাইরের অবাঞ্চিত এক্সেস হতে রক্ষা করা যায় তাকে এনক্যাপসুলেশন বলে।

//  পলিমরপিজমঃ     ভিন্ন ভিন্ন অবস্থায় একই অবজেক্টের বহুরুপ ধারণ করা বা ভিন্ন ভিন্ন ফল প্রদান করার প্রক্রিয়াকে পলিমরফিজম বলে। 





//  Object Literal 
let circle = {
    radius : 1,
    draw   : function () {
        return "Object Literal";
    }
}
console.log(circle.draw());





//  Factory Pattern Of Object
function createCircle (radius) {
    return {
        radius : radius,
        draw : function () {
            return "Factory Pattern";
        }
    }
}
const FactoryPattern = createCircle(1);
console.log(FactoryPattern.draw());




//  "new" keyword create a empty object '{}' and Refer all of 'this' keyword property and method to this empty object and Finally Return this constructor object.
//  without "new" keyword, then "this" keyword will Refer to window object.
//  Constructor Pattern of Object
function CircleCreate (radius) {
    this.radius = radius,
    this.draw = function () {
        return `Constructor Pattern : ${this.radius}`;
    }
}
const ConstructorPattern = new CircleCreate(1);
console.log(ConstructorPattern.draw());



// Every Object in JavaScript has a constructor property that references the function that was used to create that object.
function Triangle (rad) {
    this.rad = rad;
    this.trng = function () {
        console.log('Triangle');
    }
}
const another = new Triangle(10);





//  Primitive are copied by there value and on the other side, Object are copied by there Reference. 
//  Primitive are copied by there value
let number = 10;
function increase (number) {
    return ++number;
}
console.log(increase(number));
console.log(number);



//  Object are copied by there Reference
let ObjNum = {x : 20}
function increaseObj (num) {
    return ++num.x;
}
console.log(increaseObj(ObjNum));
console.log(ObjNum);



//  Enumerating Properties with for in method
function Square (squareValue) {
    this.squareValue = squareValue;
    this.paint = function () {
        console.log("For In Method");
    }
}
const square = new Square(75);
for (let key in square) {
    if (typeof square[key] !== 'function')
    console.log(key, square[key]);
}
//  Object.keys() method
const keys = Object.keys(square);
console.log(keys);
if ('squareValue' in square) 
console.log("Square has a Value");





//  Hide Private Properties with OOP Abstraction
function Circles (radiusValue) {
    this.radiusNum = radiusValue;
    // 'defaultLocation' and 'computeOptimumLocation' is private cause we didn't use "this" keyword
    let defaultLocation = {x : 0, y : 10};
    let computeOptimumLocation = function (factor) {
        return `Factor is : ${factor} and I am a Private Method`
    }

    this.write = function () {
        console.log(`I am From Private Variable and My value is: ${defaultLocation.y}`);
        computeOptimumLocation(0.1);     // Because of Closure we can use computeOptimumLocation function 
        console.log("I am From Abstraction");
    }


    //  Getters and Setters
    //  Getters are function to read the properties
    Object.defineProperty(this, 'defaultLocation', {
        get : function () {
            return defaultLocation;
        },
        set : function (value) {
            if (!value.x || !value.y)   //  throw a Error if value is not x or y
            throw new Error("Invalid Location.");
            defaultLocation = value;
        }
    })
}

const circles = new Circles(10);
circles.write();
circles.defaultLocation = 1;
