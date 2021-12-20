//  delete a properties with delete operator
var point = {
    x : 10,
    y : 20,
    z : 15
}

point.x = 45;
point.a = 15;
console.log(point);

point.a = undefined;
console.log(point);
//  delete 'a' properties from 'point' Object
delete point.a;
console.log(point)