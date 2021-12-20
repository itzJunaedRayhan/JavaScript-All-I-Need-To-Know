//  While Loop
    // while (condition) {
    //     // code block to be executed
    // }

    
var isRunning =  true;
while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if (rand === 11) {
        console.log("Allah Mohan");
        isRunning = false;
    } else {
        console.log('You have got '+ rand);
    }
}