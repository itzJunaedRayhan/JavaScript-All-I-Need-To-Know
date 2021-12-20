var a = "I am";
var b = "Junaed Islam";

//  concat() Method
var c = a.concat(" ", b);
console.log(c);

//  substr(Where to Start, Length of string to take);
var d = c.substr(5 , 6);
console.log(d);

//  charAt(index number); used to see string position at index number
console.log(c.charAt(5));

//  startsWith("string"); check the string starts or not?
console.log(c.startsWith("I am"));

//  endsWith("string"); check the string ends with or not?
console.log(c.endsWith("Islamfhsdj"));

//  toUpperCase(); uses for convert a string to Upper case
console.log(a.toUpperCase());

//  toLowerCase(); uses for convert a string to Lower case
console.log(b.toLowerCase());

//  trim(); uses to remove unnecessary white space
console.log('       asdf;lkjgh      '.trim());

//  split(); uses to convert a string to Array of string
console.log(c.split(" "));