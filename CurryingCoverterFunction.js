function sum (a, b, c) {
    return a + b + c;
}

function curry (func) {
    return function curried (...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}

let curryingFunc = curry(sum);
console.log(curryingFunc(5, 6, 7));
console.log(curryingFunc(5)(6, 7));
console.log(curryingFunc(5)(6)(7));