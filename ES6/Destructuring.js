//  Object Destructuring
let person = {
    name    : 'Junaed islam',
    email   : 'junaedislam96@gmail.com',
    address : {
        city    : 'Habiganj',
        country : 'Bangladesh'
    }
}

let {name, email, address: {city, country}} = person;
console.log(name, email, city, country);






//  Array Destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second, , ,last] = arr;
console.log(first, second, last);
