//  using Array forEach Method
    // var arr = [10, 20, 30, 40, 50];
    // var result = 0;
    // arr.forEach((value, index, arr) => {
    //     console.log(value, index, arr)
    //     result += value;
    // })
    // console.log(result);





//  Using Function
    var arr = [10, 20, 30, 40, 50];
    function ForEachFun (arr, cb) {
        for (var i = 0; i < arr.length; i++) {
            //  console.log(arr[i]);
            cb(arr[i], i, arr);
        }
    }



    //  Calling Function
    var sum = 0;
    ForEachFun(arr, (value, idx, array) => {
        console.log(value, idx, array);
        sum += value;
        return sum;
    });
    console.log(sum)




    //  Calling Function
    ForEachFun (arr, (value, idx, array) => {
        arr[idx] = value + 5;
    })
    console.log(arr)