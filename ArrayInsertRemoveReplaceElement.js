//  ArrayInsertRemoveReplaceElement.js
//  Replace, Insert, Remove Array Elements

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

//  Replace in Index 3
    // arr[3] = 9;
    // console.log("Array After Replace: " + arr);


//  Insert Element in Array from Last 
    // arr.push(9);
    // console.log("Array after insert from Last: " + arr);


//  Insert Element in Array from First 
    // arr.unshift(9);
    // console.log("Array after insert from First: " + arr);


//  Remove Element in Array from Last 
    // arr.pop();
    // console.log("Array after Remove from Last: " + arr);


//  Remove Element in Array from First 
    // arr.shift();
    // console.log("Array after Remove from First: " + arr);



//  splice(index number where to start,  Delete Count-how much value we want to delete,  new element-single or multiple element we want to insert);
    // arr.splice(3, 0, 9, 10);
    // console.log("After Insert 9 and 10 form index 3: " + arr);
    
    // arr.splice(3, 2, 9 , 10, 11);       //  expected output 1, 2, 3, 9, 10, 11,  6, 7, 8
    // console.log("After delete 2 element from index 3 and Insert '9, 10. 11' as a new element: " + arr);


//  Remove a specific element from array
    arr.splice(3, 2);
    console.log("After Remove 2 element from index number 3:" + arr);
    //  expected output 1, 2, 3, 6, 7, 8