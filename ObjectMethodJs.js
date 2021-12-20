var person = {
    name : "Junaed Islam",
    age  : 21
}


//  hasOwnProperty()
console.log(person.hasOwnProperty("name"));     //  true
console.log(person.hasOwnProperty("age"));      //  true
console.log(person.hasOwnProperty("skill"));    //  false


//  Object.keys()
console.log(Object.keys(person));               //  [ 'name', 'age' ]


//  Object.values()
console.log(Object.values(person));             //  [ 'Junaed Islam', 21 ]


//  Object.entries()
console.log(Object.entries(person));            //  [ [ 'name', 'Junaed Islam' ], [ 'age', 21 ] ]


//  Object.assign(current Obj, new Obj)
console.log(Object.assign(person, {status: 'active'}));         //  { name: 'Junaed Islam', age: 21, status: 'active' }


//  Object.defineProperty()
Object.defineProperty(person, 'college', {
    value : 'HPI',
    writable : false    //  it means you can't change this property value in future 
});
console.log(person.college);




//  Object.defineProperties() for multiple properties
Object.defineProperties(person, {
    'University' : {
        value : 'BU',
        writable : true
    },
    'School' : {
        value : "SHS",
        writable : true
    }
})
console.log(person.University);     //  BU
console.log(person.School);         //  SHS





//  Object.preventExtensions()  -> after use this object we can't add new property but we can delete existing propertis
Object.preventExtensions(person);
person.title = "Content Creator";       //  failed to add
// delete person.age;
console.log(person);




//  Object.isExtensible()  ->  check the object is avilable for add new values ? return true or false
console.log(Object.isExtensible(person));



//  Object.seal()   -> after use this object we can't add or delete property but we can update property
Object.seal(person);
person.job = "Developer";       //  failed to add
delete person.name;             //  failed to delete
person.name = "Ragnar Lothbrok" //  we can update existing property
console.log(person);




//  Object.isSealed()     ->  check the object is avilable for add new values and delete existing values ? return true or false
console.log(Object.isSealed(person));




//  Object.freeze();   -> after use this object we can't add or delete or update property
Object.freeze(person);
person.address = "Habiganj";       //  failed to add
delete person.name;             //  failed to delete
person.name = "Bjorn Lothbrok" //  failed to update
console.log(person);




//  Object.isFrozen();   ->  check the object is avilable for add new values and delete or update existing values ? return true or false
console.log(Object.isFrozen(person));