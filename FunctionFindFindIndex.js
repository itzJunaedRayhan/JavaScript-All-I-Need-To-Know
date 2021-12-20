var arr = [0, 1, 7, 9, 2, 13, 83, 31];

// var result = arr.find ((value) => {
//     return value === 31;
// });
// console.log(result);




function FindFindIndex (nums, cb) {
    for (var i = 0; i < nums.length; i++) {
        if (cb(nums[i])) {
            // return nums[i];  //  For Find()
            return i;           //  For findIndex()
        }
    }
    return;
}

var rslt = FindFindIndex (arr, (value) => {
    return value === 13;
});

console.log(rslt);