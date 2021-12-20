var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [4, 6, 0];

function AddArrayItems (arr) {
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    console.log("The Sum of Array is: "+result)
}
AddArrayItems(arr1);
AddArrayItems(arr2);
AddArrayItems(arr3);




function Add (a , b) {
    var result = a + b;
    console.log("The sum is: "+ result);
}
Add(10, 20);
Add(7, 3);
Add(500, 700);