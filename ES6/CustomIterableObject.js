//  Custom Iterable Object
let obj = {
    start : 1,
    end : 5,
    [Symbol.iterator] : function () {
        let currentValue = this.start;
        const self = this;
        return {
            next () {
                return {
                done : currentValue > self.end,
                value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}

//  Using for Of Loop
for (let v of obj) {
    console.log(v);
}


//  Using iterator
let iterator = obj[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());