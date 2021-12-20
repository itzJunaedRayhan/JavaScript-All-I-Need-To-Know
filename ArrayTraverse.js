//  Traverse an Array
var arr = [4, 5, 8, 9, 25, 3, 47, 10];


//  Find sum of array
var sum = 0;
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum of Result is: ", sum);


//  update array's all element with add 2
var arr2 = [4, 5, 8, 9, 25, 3, 47, 10];
for(i = 0; i < arr2.length; i++){
    arr2[i] = arr2[i] + 2;
}
console.log("Updated Array list: " + arr2);


//  Find Even Number
for (i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0){
        console.log("Even Number is: "+ arr[i])
    }
}