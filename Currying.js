//  Currying
    // function currieMultiply (a) {
    //     return function (b) {
    //         return function (c) {
    //             return a + b + c;
    //         }
    //     }
    // }
    // // console.log(currieMultiply(5)(10)(15));
    // let step1 = currieMultiply(5);
    // console.dir(step1);
    // let step2 = step1(20);
    // console.dir(step2);
    // let step3 = step2(15);
    // console.log(step3);



//  Discount Calculation Using Currying
    // function discount (disc) {
    //     return (price) => {
    //         return price - price * disc;
    //     }
    // }
    // let TenPersDisc = discount(0.1);
    // let TweentyPerDisc = discount(0.2);

    // let Rahim = TenPersDisc(600);
    // let Karim = TenPersDisc(700);
    // let Ragnar = TweentyPerDisc(1200);

    // console.log(Rahim, Karim, Ragnar);




//  Curry Converter Function
// function sum (x, y, z) {
//     return x + y + z;
// }
// function curry (func) {
//     return function curried (...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     }
// }
// let curriedResult = _.curry(sum);
// console.log(curriedResult(5, 6, 7));
// console.log(curriedResult(5)(6,7));
// console.log(curriedResult(5)(6)(7));




function log (date, importance, message) {
    return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${importance} : ${message}`;
}

//  Because we used lodash so we don't need curry function
// function curry(logData) {
//     return function curring (...args) {
//         if (args.length >= logData.length) {
//             return logData.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curring.apply(this, args.concat(args2));
//             }
//         }
//     }
// }

let CurryingOperation = _.curry(log);
console.log(CurryingOperation(new Date(), "Danger", "Error 404"));
console.log(CurryingOperation(new Date())("Danger", "Error 305"));
console.log(CurryingOperation(new Date())("Warning")("Error 204"));

let logNow = CurryingOperation(new Date());
console.log(logNow("Debug")("Some Debug"));