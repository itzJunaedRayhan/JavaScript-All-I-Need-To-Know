var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]

console.log(arr[0][0]);
console.log(arr[1][1]);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++){
        console.log('Element '+ i + ':' + arr[i][j]);
    }
}