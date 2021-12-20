// var numbers = [4, 8, 1, 6, 7, 9, -8, 0, -2, 4, 3, 5, 6, 8, 9, 2, 1, 7, -4];
// var AscSort = numbers.sort((a , b) => a > b ? 1 : -1);
// var DscSort = numbers.sort((a , b) => a > b ? -1 : 1);
// console.log(AscSort);
// console.log( DscSort);

var person = [
    {
        name : 'A',
        age  : 23
    },
    {
        name : 'B',
        age  : 22
    },
    {
        name : 'C',
        age  : 25
    },
    {
        name : 'D',
        age  : 18
    },
    {
        name : 'E',
        age  : 29
    }
];

// var AscPerson = person.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(AscPerson);

// var DscPerson = person.sort((a, b) => a.age > b.age ? -1 : 1);
// console.log(DscPerson);



var arr = [4, 8, 1, 6, 7, 9, 8, 0, 2, 4, 3, 5, 6, 8, 9, 2, -1, 7, 4];
//  every()
    var res1 = arr.every((value) => {
        return value % 2 === 0;
    });
    console.log(res1);

    var res2 = arr.every((value) => {
        return value >= 0;
    });
    console.log(res2);

    
//  Some()
    var res3 = arr.some((value) => value < 0);
    console.log(res3);
