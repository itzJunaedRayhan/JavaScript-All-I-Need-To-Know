function myFunc (c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}
//  call
myFunc.call({a : 20, b : 30}, 40, 10);

//  apply
myFunc.apply({a : 15, b : 25},[30, 100]);

//  bind
const testBind = myFunc.bind({a : 100, b : 200});
testBind(300, 400);