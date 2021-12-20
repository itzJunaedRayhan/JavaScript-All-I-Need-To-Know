let arr = [1, 2, 3];
let str = "Junaed";


//  Iterator using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


//  custom Iterator
function iterator (collection) {
    let i = 0;
    return {
        next(){
            return {
                done  : i >= collection.length,
                value : collection[i++]
            }
        }
    }
}

let CustomIterator = iterator(arr);
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());
console.log(CustomIterator.next());



//  Iterate an Array using ES6 [Symbol.iterator]()
let IterateArray = arr[Symbol.iterator]();
console.log(IterateArray.next());
console.log(IterateArray.next());
console.log(IterateArray.next());
console.log(IterateArray.next());


//  Iterate a String using ES6 [Symbol.iterator]()
let IterateString = str[Symbol.iterator]();
console.log(IterateString.next());
console.log(IterateString.next());
console.log(IterateString.next());
console.log(IterateString.next());
console.log(IterateString.next());
console.log(IterateString.next());
console.log(IterateString.next());







//  Array iteration using for of Loop
for (let element of arr) {
    console.log(element);
}

//  String iteration using for loop
for (let s of str) {
    console.log(s);
}

//  let's try to iterate an Object using for loop
let obj1 = {
    a : 10,
    b : 20
}

// for (let ob of obj1) {
//     //  console.log(ob);    //  it will show an Error cause Object is not iterable for iterate
// }




//  Let's make an Object iterable
let obj = {
    a : 10,
    b : 15,
    [Symbol.iterator] : function () {
        let currentValue = this.a;
        const self = this;
        return {
            next() {
                return {
                    done  : currentValue > self.b,
                    value : currentValue > self.b ? undefined : currentValue++
                }
            }
        }
    }
}
let iterator1 = obj[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());




/*


//  Generator
    let nums = [1, 2, 3, 4];
    function* generate (elements) {
        for (let i = 0; i < elements.length; i++) {
            yield elements[i];
        }
    }
    let ite = generate(nums);
    console.log(ite.next());
    console.log(ite.next());
    console.log(ite.next());
    console.log(ite.next());
    console.log(ite.next());

*/