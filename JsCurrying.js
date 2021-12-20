function multi (x) {
    return function (y) {
        return function (z) {
            return x * y * z;
        }
    }
}
// var result = multi(5)(6)(7);
// let step2 = step1(6);
// let step1 = multi(5);
// let step3 = step2(7);
// console.log(step3);





//  using callback function
    // var result1 = (x) => (y) => (z) => x * y * z;
    // console.log(result1(5)(6)(7));
    // let multi1 = result1(5);
    // let multi2 = multi1(6);
    // let multi3 = multi2(7);
    // console.log(multi3);


    


//  Discount Calculation
    // function discount (percentage) {
    //     return function (price) {
    //         return price - price * percentage;
    //     }
    // }

    // let TenPercentage = discount(0.1);
    // let TweentyPercentage = discount(0.2);

    // let Rahim = TenPercentage(600);
    // let Karim = TweentyPercentage(1200);

    // console.log(Rahim, Karim);

    function curry (func) {
        return function currying (...args) {
            if (args.length >= func.length) {
                return func.apply(this, args);
            } else {
                return function (...args2) {
                    return currying.apply(this, args.concat(args2));
                }
            }
        }
    }

    function sum (a, b, c) {
        return a + b + c;
    }

    let curried = curry(sum);

    console.log(curried(5, 6, 7));
    console.log(curried(5)(6,7));
    console.log(curried(5)(6)(7));