//  Problem is how we pass a 'this value' inside of inner function which is a setTimeOut function
let obj = {
    name  : 'Junaed Islam',
    print : function () {
        console.log(this);
        setTimeout(function(){
            console.log(this);
            console.log(this.name);
        },1000)
    }
}
obj.print();



//  1st Way
//  using variable which name is 'self' we can pass this value 
let obj1 = {
    name  : 'Junaed Islam',
    print : function () {
        let self = this;
        setTimeout(function(){
            console.log(self);
            console.log(self.name);
        },1000)
    }
}
obj1.print();





//  second way
//  using Bind we can define this value
let obj2 = {
    age : 22,
    printAge : function () {
        console.log(this);
        setTimeout(function(){
            console.log(this);
            console.log(this.age);
        }.bind(this),2000)
    }
}
obj2.printAge();







//  3rd way =>  Arrow Function()
//  but we can easily define this value using 'Arrow Function';
//  We can't use 'call, bind, apply' method in arrow function
//  but we can pass value of this from parent function to child function

let obj3 = {
    profession : 'Web Developer',
    printProfession : function () {
        console.log(this);
        setTimeout(() => {
            console.log(this);
            console.log(this.profession);
        }, 3000)
    }
}
obj3.printProfession();