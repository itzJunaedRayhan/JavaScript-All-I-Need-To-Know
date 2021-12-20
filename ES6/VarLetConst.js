
if (true) {
    // var a = 10;
    let a = 10;
}
//  console.log(a)

//  When we use var run perfectly when we use let then we got Reference Error
for (var i = 0; i < 5; i++) {

}
// console.log(i)

{
    var iAmVar = "I am Var";
    // let iAmLet = "I am Let";
}
// console.log(iAmVar);


(function(){
    let abc = 'ABC';
    console.log(abc);
})
console.log(abc);