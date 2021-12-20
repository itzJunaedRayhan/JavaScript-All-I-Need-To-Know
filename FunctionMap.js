//  forEach - Modify Existing Array Only 
//  map - Modify Existing Array + Return New Modified Array
//  Using Array map Method()
    // var arr = [10, 20, 30];
    // var sqrArr = arr.map((value) => {
    //     return value * value;
    // });
    // console.log(arr);
    // console.log(sqrArr);





//  Using Function
    var arr = [10, 20, 30];

    function myMap (arr, cb) {
        var newArray = [];
        for (var i = 0; i < arr.length; i++) {
            var temp = cb(arr[i], i, arr)
            newArray.push(temp);
        }
        return newArray
    }
    


    var square = myMap(arr, (value, index, array) => {
        return value * value * value;
    })
    console.log(square);

    var mTen = myMap(arr, (value) => {
        return value * 10;
    })
    console.log(mTen);