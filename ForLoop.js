//  For Loops
    // for(initialize; condition; increment/decrement) {
    //     code to execute
    // }


//  Odd Number between 1 - 100
    // for(var i = 1; i <=100; i++){
    //     if(i % 2 === 1){
    //         console.log(i)
    //     }
    // }


//  Total Number between 1 - 10;
    var sum = 0;
    for(var i = 1; i <= 10; i++){
        console.log(sum + ' + ' + i + '=' + (sum + i));
        sum = sum + i;
    }
    console.log('Result is = '+ sum)