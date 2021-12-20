var obj = {
    x : 40,
    y : 60,
    z : 75
}

//  Object.keys(object) returns a array of object keys
    //  console.log(Object.keys(obj));



//  Object.values(object) returns a array of object values
    //  console.log(Object.values(obj));



//  Object.entries(object) returns multiple arrays of object keys and values together
    //  console.log(Object.entries(obj));


//  in this method also changed first object values
    // var obj3 = obj;
    // obj3.x = 70;
    // obj3.y = 100;
    // console.log(obj);
    // console.log(obj3)




//  this is the perfect way to create a another object from a object, ant in this method first object value will as it it. 
    var obj2 = Object.assign({}, obj);
    obj2.x = 100;
    console.log(obj);
    console.log(obj2);