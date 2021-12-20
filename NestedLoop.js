//  Nested Loop
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5


var n = 5;
for (i = 1; i <= 5; i++) {
    var result = '';
    for(j = 1; j <= i; j++){
        result += j + ' ';
    }
    console.log(result)
}



//  Another use of Nested Loop
console.log("\n \n")    // for get now line
var x = 10;
for (var i = 1; i <= x; i++) {
    var result = '';
    for (var j = 1; j <= x; j++) {
        result += "* "
    }
    console.log(result)
}