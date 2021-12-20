//  getters     =>  access properties
//  setters     =>  change (mutate) them

//  First Example of Getters and Setters:
class Square {
    constructor (width, height) {
        this.width  = width;
        this.height = height;
        this.numOfReqForArea = 0;
    }
    //  Getters:
    get area () {
        this.numOfReqForArea++;
        const area = this.width *  this.height;
        return area;
    }
    //  Setters:
    set area (value) {
        this.width = Math.sqrt(value);
        this.height = this.width;
    }
}

const sqrt = new Square (5, 4);
//  set the value of Getters: and pass in as argument 
sqrt.area = 64; 

console.log(sqrt.area);
console.log(sqrt.area);
console.log(sqrt.area);
console.log(sqrt.numOfReqForArea);










//  Second Example Of Getters and Setters:
const person = {
    firstName : 'Junaed',
    lastName  : 'Rayhan',
    //  getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    //  setter
    //  where value is 'Ragnar Lothbrok'
    set fullName (value) {      
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName  = parts[1];
    }
};
person.fullName = 'Ragnar Lothbrok';
// console.log(person);
