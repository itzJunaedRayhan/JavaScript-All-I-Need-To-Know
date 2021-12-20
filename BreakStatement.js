//  Break Statement

//   with while condition
while (true) {
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 9) {
        console.log('Allah Mohan');
        break;
    } else {
        console.log("You have got: " + rand);
    }
}


//  with For Loop
for(var i = 1; i < 10; i++){
    if (i % 5 === 0) {
        break;
    } else {
        console.log(i)
    }
}