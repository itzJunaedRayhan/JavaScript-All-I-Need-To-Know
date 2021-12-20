
var str = 'Something';      //  String Liretal
var str2 = String('Something');     //  String Constructor

console.log("String Literal: " + str);
console.log("String Constructor: " + str2);



//  When you need to covert Number to String
var n = 10;
var str3 = n + '';      //  First Way
var str4 = n.toString();    //  Second Way
var str5 = String(n);   //  Third Way
console.log(str3, str4, str5)