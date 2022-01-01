//  Throwing An Error:
try {
    console.log(" I am Line 1");
    throw new Error ("I am a Custom Error");
    console.log(" I am Line 1");
    console.log(" I am Line 1");
} catch (e) {
    //  This block will execute if 'try' got any error:
    console.log(e.message);
}