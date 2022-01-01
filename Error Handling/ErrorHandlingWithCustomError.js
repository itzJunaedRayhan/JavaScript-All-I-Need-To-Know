//  Custom Error:
class CustomError extends Error {
    constructor (msg) {
        super(msg);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }
    }
}

try {
    console.log(" I am Line 1");
    throw new CustomError ("I am a Custom Error");
    console.log(" I am Line 1");
    console.log(" I am Line 1");
} catch (e) {
    //  this block will execute if 'try' block got an Error
    console.log(e.message);
    console.dir(e);
} finally {
    //  this block will definitely execute after 'try' block or after 'catch' Block:
    console.log('I am Finally Block');
}