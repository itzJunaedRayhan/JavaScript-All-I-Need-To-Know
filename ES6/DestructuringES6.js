//  Object Destructuring

const user = {
    id : 339,
    name : "Junaed",
    age : 23,
    education  : {
        degree : "BSC" 
    }
};
//  Simple way
    const {name} = user;
    console.log(name);

//  name as a title 
    const {name : title} = user;
    console.log(title);

//  nested object
    const {education : {degree}} = user;
    console.log(degree);

//  Qualification as degree in nested Object
    const {education : {degree : Qualification}} = user;
    console.log(Qualification);





//  Array Destructuring
    let numbers = [1, 2, 3, 4, 5, 6];
    let [a, b]  = numbers;
    console.log(a, b);

    //  array Destructuring
    let [, x, , , y, ,] = numbers;
    console.log(x, y);

    //  nested array
    let numbers1 = [1, 2, [3, 100, 500], 4, 5];
    const [, , [, p, q]] = numbers1;
    console.log(p, q)   //  100, 500






//  Swaping
    //  old way
    let m = 1;
    let n = 2;
    let temp = m;
    m = n;
    n = temp;
    console.log(m, n);


    //  new way
    let c = 10;
    let d = 20;
    [c, d] = [d, c];
    console.log(c, d);

