//  Enhance Object;
let a = 10, b = 20;
let obj = {
    a,  //  a : a;  if property and value are same then we can write like this and its call objet Enhancing
    b,  //  b : b;
    print () {
        console.log(this);
    }
}
obj.print();


