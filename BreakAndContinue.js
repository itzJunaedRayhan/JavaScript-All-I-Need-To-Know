//  Break
for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        break;
    }
    console.log(" "+ i);
}
console.log("Allah Mohan");




//  Continue Statement - it will ignore current loop execution
for (let i = 0; i <= 20; i++) {
    if (i === 10) {
        console.log("Value is: "+ i);
        continue;   
    }
    console.log(" "+ i);
}
console.log("Allah Mohan");




//  Another Example of Continue Statement
for (var i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(" "+ i);
}
