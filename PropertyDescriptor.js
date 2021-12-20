let Person = {
    name : "Junaed Islam"
}

// for (let i in Person) {
//     console.log(i);
// }

//  console.log(Object.keys(Person));


// let descriptor = Object.getOwnPropertyDescriptor(Person, 'name');
// console.log(descriptor);

// let baseObj    = Object.getPrototypeOf(Person);
// console.log(baseObj);

// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString');
// console.log(descriptor);


Object.defineProperty(Person, 'name', {
    enumerable : false,
    writable : false,
    configurable : false,
    value : "Junaed Islam Rayhan"
})

//  console.log(Person.name);
Person.name = "Ragnar";     // not available cause we 'false writable';

for (let j in Person) {
    console.log(j);     //  not available cause we false enumerable
}