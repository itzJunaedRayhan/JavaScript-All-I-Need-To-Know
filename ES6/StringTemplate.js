var s = `   Hello
I am 
Junaed
    Islam   `;
console.log(s.trim());

var age = 23;
var name = "Junaed islam";

console.log("My Name is " + name + " and I am " + age + " years old");
console.log(`My Name is ${name} and I am ${age} years old. I am${age < 18 ? " not" : " "} adult`);

console.log(name.padStart(15, 'a'));    //  Make a string length 15 and fill rest of length with 'a' from first
console.log(name.padEnd(15, '*'));      //  Make a string length 15 and fill rest of length with '*' from last
console.log('S'.repeat(10));            //  Repeat S for 10 times