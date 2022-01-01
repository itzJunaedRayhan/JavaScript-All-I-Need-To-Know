//  Finally Block

try {
    console.log(" I am Line 1");
    throw new Error ("I am a Custom Error");
    console.log(" I am Line 1");
    console.log(" I am Line 1");
} catch (e) {
    //  this block will execute if 'try' block got an Error
    console.log(e.message);
} finally {
    //  this block will definitely execute after 'try' block or after 'catch' Block:
    console.log('I am Finally Block');
}