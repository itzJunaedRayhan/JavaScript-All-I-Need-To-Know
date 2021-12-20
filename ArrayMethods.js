var arr = [4, 5, 9, 6];
var arr2 = [5, 10, 45, 23];


//  Join("what you want to put between two element");
    //  console.log(arr.join(" | "))    //  expected Output as String: 4 | 5 | 9 | 6


//  fill(put what you want to replace for all element);
    //  console.log(arr.fill('junaed'));    //  expected Output: [ 'junaed', 'junaed', 'junaed', 'junaed' ];


//  concat() method used for Merge two array in one array
    // var arr3 = arr.concat(arr2);
    // console.log(arr3)   //  expected Output: [4,  5,  9,  6, 5, 10, 45, 23]

   

//  Array.isArray() method used to check is array or not, it returns "True" or "False";
    console.log(Array.isArray(arr));



//  copyWithin()    =>  Copies part of array to another location
var copyWithin = [1, 2, 3, 4, 5].copyWithin(0, 2);
console.log(copyWithin)