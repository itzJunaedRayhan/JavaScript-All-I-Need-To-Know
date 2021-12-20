//  Callback Function:

//  Step 1
    //  Declare Show Function
    // function show (a) {
    //     console.log("I am Show Function " + a);
    // }
    //  Declare Geeky Function
    // function geeky (callback) {
    //     let a = 100;
    //     callback(a);
    // }
    //  Call Geeky Function
    // geeky(show);




//  Step 2
    //  Declare Function
    function geeky (callback) {
        let a = 10;
        callback(a);
    }
    //  Call the Function
    geeky(function show (a) {
        console.log("I am a Show Function " + a);
    });





//  Step 3
    //  Declare Function
    function geeky (callback) {
        let a = 75;
        callback(a);
    }
    //  Call the Function
    geeky ((a) => console.log("I am a Show Function "+ a));
