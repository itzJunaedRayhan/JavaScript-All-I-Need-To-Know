//  Error In JavaScript
//  RangeError:
    // if ( 2.7976931348623157e+308 > Number.MAX_VALUE) {
    //     throw new RangeError("Number is Too Long");
    // }





//  ReferenceError:
    //  console.log(x);




//  Syntax Error:
    //  console.log(5




//  Custom Error:
//  Error Syntax:   new Error(message, fileName, lineNumber)
    let n = 10;
    if (n > 5) {
        throw new Error ('N is Greater than 5');
    }