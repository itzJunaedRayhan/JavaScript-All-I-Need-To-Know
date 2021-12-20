var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9];

// var fillteredArr = arr.filter((value) => {
//     return value > 4;
// })

// console.log(fillteredArr)



function myFilter (numbers, cb) {
    var newArray = [];
    for (var i = 0; i < numbers.length; i++) {
        if (cb(numbers[i], i, numbers)) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
}

var odd = myFilter (arr, (value) => {
    return value % 2 === 1;
})
console.log(odd);

var biggerThanFour = myFilter (arr, (value) => {
    return value > 4;
});
console.log(biggerThanFour);