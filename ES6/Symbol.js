
//  Symbols in JavaScript
    // 1.	সিম্বল হলো একটি ইউনিক আইডেন্টিফায়ার বা একটা ইউনিক আইডি হিসেবে কাজ করে।
    let name = Symbol('Description');




    // 2.	অবজেক্টের প্রোপার্টি হিসেবে আমরা তাদেরকে এড করতে পারি।
    let Founder = Symbol('Founder');
    let obj = {
        name : 'Jhon Snow',
        company : "WEB Genesis",
        [Founder] : "Junaed"
    }
    obj[Symbol('age')] = 23;





    // 3.	তাকে আমরা বাহিরে থেকে ডিলিট করতে পারি নাহ।
    function myFunc () {
        let PVT = Symbol('Private');
        return {
            modify (obj2) {
                obj2[PVT] = true;
            },
            output (obj2) {
                return obj2[PVT];
            }
        }
    }
    let value = myFunc();
    let obj2 = {
        a : 10,
        b : 20
    }
    value.modify(obj2);
    console.log(value.output(obj2));
    console.log(obj2);
    delete obj2['a'];                   //  deleted cause it's not Symbol Property
    console.log(obj2);
    delete obj2['Symbol(Private)'];     //  not deleted cause it Symbol Property
    console.log(obj2);





    // 4.	আমরা যদি কতগুলো সিম্বল তৈরি করি তাহলে তারা প্রত্যেকে সেপারেট আইডেন্টিফায়ার হিসেবে তৈরি হয়।
    let name1 = Symbol('Ragnar');
    let name2 = Symbol('Ragnar');
    console.log(name1 === name2);   //  False
    //  They are different identifier so they are not equal 





    // 5.	এটাকে যদি আমরা সিঙ্গেল টোন হিসেবে ব্যবহার করতে চাই তাহলে Symbol.for() ব্যবহার করে করতে পারি। 
    let name3 = Symbol.for("Bjorn");
    let name4 = Symbol.for("Bjorn");
    console.log(name3 === name4);
    //  They are different identifier but we used Symbol.for()





    // 6.	সিম্বলের ডিসক্রিপশন বলে একটা প্রোপার্টি আছে, এটা সিম্বলের আইডেন্টিফায়ার হিসেবে ব্যবহৃত হয়।
    let identify = Symbol('description');   
    //  String or Number Possible for identifier



    

    // 7.	আমরা যদি বিভিন্ন বিল্ট ইন ফাংশনকে বা কোর ফাংশনকে সেইফলি নিজেদের মতো করে ওভাররাইট করতে চাই তাহলে আমরা সেটা সিম্বলের সাহায্যে সহজেই করতে পারি।
    class Product {
        constructor (title) {
            this.title = title;
        }
        //  implementation
        [Symbol.search](string){
            return string['indexOf'](this.title) >= 0 ? 'Found' : 'Not Found';
        }
    }
    let myProduct = new Product('laptop')
    console.log('JavaScript'.search('Script'));
    console.log('HP laptop'.search(myProduct));





    // 8.   সিম্বল হলো প্রিমিটিব ডাটা টাইপ এবং দুইটা সিম্বল কখনো এক হতে পারে নাহ।
    let str     = new String('Junaed');     //  String - Primitive
    let arr     = new Array (1, 2, 3);      //  Array - Non Primitive
    let num     = new Number(10);           //  Number - Primitive
    let Ragnar  = Symbol('Ragnar');         //  Symbol  - Primitive






    //  9.  Symbols Are Invisible
    //  We can hide a object properties using Symbol and Symbol Properties are not accessible from any kind of loop.
    //  When we don't want to any of our Object Property should iterate in any loop or accessible from somewhere, then we can use Symbol as a Object Properties. 
    let object1 = {};
    object1.name = "JavScript";
    object1.est  = "1995";
    object1[Symbol("Founder")] = "Brendan";

    console.log(object1);   //  {name: 'JavScript', est: '1995', Symbol(Founder): 'Brendan'}
    
    console.log(Object.keys(object1));  //   ['name', 'est'] - Symbol not found
    
    for (let keys in object1) {
        console.log(keys)   //  name, est - Symbol Property or founder not found
    } 
    





    //10.   Symbol Always Avoid name Collision for that reason we can overwrite any build in prototype method.
    //  Let's overwrite 'include' method which is array's built in prototype, and add our custom include method in array's prototype.
    var myArray = [1, 2, 3];
    console.log(myArray.includes(2));
    console.log(myArray['includes'](2));

    let includes = Symbol();
    Array.prototype[includes] = function () {
        return 'This is array custom include function';
    }
    console.log(myArray[includes]());