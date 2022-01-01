//  Asynchronous JavaScript:

//  JavaScript Is a Asyncronous Programming Language
//  JavaScript is a Single Threaded Language, That's mean JavaScript process one task at A Time.
//  Syncronous Programming:     Syncronous basically means that you can only execute one thing at a time.
//  Asynchronous Programming:   Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.


//  How Does JavaScript Code Compile or Execute:
	//  1.	call stack
	//	2.	Web API
	//	3.	Event loop
    //	4.	Callback Queue



// There are mainly three ways to handle Asynchronous Task:
//  1.  Callback Function
//  2.	Promise
//  3.	Async Await Function
    


//  Handle Collection on Async Operation:
    //  1.  Async Iterator 
    //  2.  For Await Of Loop 
    //  3.  Async Generator





//  Some Example:
console.log('I am Line One');

setTimeout(() => {
    console.log('I am Line Two');
}, 3000);

setTimeout(() => {
    console.log('I am Line Three');
}, 0);

console.log('I am Line Four');

setTimeout(() => {
    console.log("I am Line Five");
}, 1000);

setTimeout(() => {
    console.log("I am Done");
}, 5000);