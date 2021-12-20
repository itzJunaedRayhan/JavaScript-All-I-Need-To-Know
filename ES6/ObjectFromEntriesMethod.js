//  object to array:
//  it will create a 2d array for all a single property.
//  Object.entries() used to convert a objet to array
var obj = {
    a : 10,
    b : 20
}
console.log(Object.entries(obj))






//  array to object:
//  Object.fromEntries() used to convert an array to object.
var objArray = [
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(objArray));