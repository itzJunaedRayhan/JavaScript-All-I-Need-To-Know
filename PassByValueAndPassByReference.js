//  Pass By Value - here call by value is variable "n"

var n = 10;
function change (n) {
    n = n + 100;
    console.log(n);
}
change(n);  //  110
console.log(n); //  10  -> Look function can't change "n" value and its is called Pass By Value;






//  Pass By Reference - here reference is obj Object
var obj = {
    a : 10,
    b : 20
}
function changeMe (obj) {
    obj.a = obj.a + 10;
    obj.b = obj.b + 30;
    console.log(obj)
}
changeMe(obj);
console.log(obj);   //  Once we changed any object values in anywhere it will change it for everywhere and it is called call by reference