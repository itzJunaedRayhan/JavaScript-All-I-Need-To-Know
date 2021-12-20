//  Do While Loop
    // do {
    //     // code block to be executed
    // }
    // while (condition);


var isRunning = true;
do{
    console.log("Allah Mohan")
    isRunning = false;
} while (isRunning)



let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"