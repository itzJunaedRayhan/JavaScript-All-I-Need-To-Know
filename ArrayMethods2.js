//  map()   This method creates a new array with the results of calling a provided function on every element in this array.
    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const mapped = arr.map(element => element + 10);
    // console.log(mapped)




//  filter()    This method creates a new array with only elements that passes the condition inside the provided function.
    // const arr2 = [1, 2, 3, 4, 5, 6, 7];
    // const filtered = arr2.filter(element => element == 2 || element == 4);
    // console.log(filtered)




//  sort()    This method is used to arrange/sort array’s elements either in ascending or descending order.
    // const arr3 = [1, 2, 3, 4, 5, 6, 7];
    // const alphabet = ["f", "a", "c", "e", "b", "o", "o", "k"];

    // var descend = arr3.sort((a , b) => a > b ? -1 : 1);
    // console.log(descend);

    // var ascend = alphabet.sort((x , y) => x > y ? 1 : -1);
    // console.log(ascend);




//  forEach();     This method helps to loop over array by executing a provided callback function for each element in an array.
    // const arr4 = [1, 2, 3, 4, 5, 6];
    // let ForEach = arr4.forEach(element => console.log(element + 2));




//  concat()    This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.
    // const arr5 = ["a", "b", "c"];
    // const arr6 = ["d", "e", "f"];
    // let concated = arr6.concat(arr6);
    // let concated2 = arr5.concat(arr6);
    // console.log(concated , concated2);




//  every() This method checks every element in the array that passes the condition, returning true or false as appropriate.
    // const arr7 = [1, 2, 3, 4, 5, 6, 7];
    // let greaterFive = arr7.every(element => element > 5 );
    // console.log(greaterFive);

    // let lessnine = arr7.every(element => element < 9);
    // console.log(lessnine);




//  some() This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.
    // const arr8 = [1, 2, 3, 4, 5, 6, 7];
    // let greatersix = arr8.some(element => element > 6);
    // console.log(greatersix);

    // let lessZero =  arr8.some(element => element < 0);
    // console.log(lessZero)




//  includes()     This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
    // const arr9 = [1, 2, 3, 4, 5, 6, 7];
    // let included = arr9.includes(9);
    // let included2 = arr9.includes(3);
    // console.log(included, included2);




//  join()      This method returns a new string by concatenating all of the array’s elements separated by the specified separator.
    // const name = ["j", "u", "n", "a", "e", "d"];
    // let joined = name.join("");
    // console.log(joined)




//  reduce()    This method applies a function against an accumulator and each element in the array to reduce it to a single value.
    // const arr10 = [1, 2, 3, 4, 5, 6, 7];
    // const reduced = arr10.reduce((a , b) => a * b);
    // console.log(reduced)
    // const reduced2 = arr10.reduce((total, current) => total + current);
    // console.log(reduced2);




//  find()  This method returns the value of the first element in an array that pass the test in a testing function.
    // const arr11 = [1, 2, 3, 4, 5, 6, 7];
    // const finded = arr11.find(element => element > 5);
    // console.log(finded);




//  findIndex()     This method returns the index of the first element in an array that pass the test in a testing function.
    // const arr12 = [1, 2, 3, 4, 5, 6, 7];
    // const findIndexed = arr12.findIndex(element => element > 4);
    // console.log(findIndexed)




//  indexOf()   This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
    // const NameList = ["Junaed", "Ragnar", "Bjorn", "Ubbe", "Ivar", "Hvitserk", "Sigurd"]
    // const indexedOf = NameList.indexOf("Ragnar");
    // const indexedOf2 = NameList.indexOf("Loki")
    // console.log(indexedOf);     //  "Ragnar" Availbale so expected output: 1
    // console.log(indexedOf2)     //  "Loki" not Availbale so expected output: -1




//  fill()  This method fills the elements in an array with a static value and returns the modified array.
    // const num = Array(3);
    // console.log(num);
    // num.fill("Ragnar Lothbrok");
    // console.log(num);





//  slice()     This method returns a new array with specified start to end elements.
    // const arr13 = [1, 2, 3, 4, 5, 6, 7];
    // const sliced = arr13.slice(3, 5)    //  4 , 5
    // console.log(sliced);
    // console.log(arr13)





//  reverse()   This method reverses an array in place. Element at last index will be first and element at 0 index will be last.
    // const vikings = ["Ragnar", "Bjorn", "Ubbe", "Ivar", "Hvitserk", "Sigurd"];
    // const reversed = vikings.reverse();
    // console.log(reversed);




//  splice(start, deletecount, elements)    changes contents of array by removing, replacing and/or adding elements
    // const arr14 = [1, 2, 3, 4, 5, 6, 7];
    // const spliced = arr14.splice(1, 3, "b", "j", "o", "r", "n");
    // console.log(spliced);   //  Output: 2, 3, 4
    // console.log(arr14)  //output:  1, "b", "j", "o", "r", "n", 5, 6, 7




//  toLocalString()     elements are converted to Strings using toLocaleString and are separated by locale-specific String (eg. “,”)
    // var str = [1.1, 'j', new Date()]
    // var LocStr = str.toLocaleString();
    // console.log(LocStr) //  Coutput as a String: 1.1,j,9/26/2021, 2:44:20 PM




//  Array.isArray() method used to check is array or not, it returns "True" or "False";
    // var arr15 = [4, 5, 9, 6];
    // console.log(Array.isArray(arr15));




//  copyWithin(target, start, end)    =>  Copies part of array to another location
    // var copyWithin = [1, 2, 3, 4, 5].copyWithin(0, 2);
    // console.log(copyWithin)