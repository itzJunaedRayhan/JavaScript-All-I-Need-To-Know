//  Callback Not Always Asynchronous in Javascript
let arr = [1, 2, 3, 4]
let SqrArr = arr.map(v => v * v);
// console.log(SqrArr);

function asyncMap (arr, callback) {
    return arr.map(v => {
        //  setTimeout(callback.bind(null, v), 0)
        //  or
        setTimeout(() => callback(v),0);
    })
}
let QbArr = asyncMap(arr, v => {
    console.log(v * v * v);
});

console.log(QbArr);