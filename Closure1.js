/*
//  1.	আউটার ফাংশন রান হওয়ার পরেও ইন্নার ফাংশন চাইলে আউটার ফাংশনের সবকিছু ব্যবহার করতে পারবে এটাই ক্লোজার, এখানে ক্লোজার এর কাজ হলে আউটার ফাংশনের ভ্যালু গুলো মনে রাখা।
//  2.	Clouser is a Function with remembered values.
//  3.	A Closure is a function having access to the parent scope, event after the parent function has closed.
//  4.	Clouser is the combination of a function bundled,enclosed with references to its surrounding state.






//  1.  first way
    // Initiate counter
    let counter = 0;

    // Function to increment counter
    function add() {
    counter += 1;
    }

    // Call add() 3 times
    add();
    add();
    add();
    console.log(counter);   
    // The counter should now be 3


    counter = 4;
    console.log(counter);
    //  we can change counter value without calling add() function but we want counter as a private, 
    //  we don't want to change it without calling add() function
*/






/*
//  2.  second way - The counter should be local to the add() function, to prevent other code from changing it:
let counter = 0;
function add () {
    let counter = 0;
    counter += 1;
}
add();
add();
add();
console.log(counter);   
//  The counter should now be 3. But it is 0;  
//  It did not work because we display the global counter instead of the local counter.
*/






/*
//  3.  third way   -   We can remove the global counter and access the local counter by letting the function return it:
// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  
// Call add() 3 times
    add();
    add();
    add();
    console.log(add())
//  The counter should now be 3. But it is 1.
//  It did not work because we reset the local counter every time we call the function.
*/






/*  
###########      We need a closure to solve this      ############
*/
function temporary () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
}
const add = temporary();


// console.dir(add);
// add();
// console.dir(add);
// add();
// console.dir(add);
// add();

//  For Html Page and change to value of Counter in html page
function myFunction () {
    document.getElementById("demo").innerHTML = add();
}









// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
// A closure is a function having access to the parent scope, even after the parent function has closed.


