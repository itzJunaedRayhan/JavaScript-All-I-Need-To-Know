let user = {
    active : true
};

let teacher = {
    teaching : ["math", "Science"]
};

Object.setPrototypeOf(teacher, user);
console.log(teacher);



//  get Prototype of
var proto = {};
console.log(Object.getPrototypeOf(proto))
var obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto) // true