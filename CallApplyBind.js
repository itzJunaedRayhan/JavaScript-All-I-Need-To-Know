//  call, apply and bind method

function myFunc (c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}

//  Call
myFunc.call({a: 40, b: 25}, 10, 5)

//  apply
myFunc.apply({a: 400, b: 250}, [10, 5]);

//  bind
var testBind = myFunc.bind({a: 400, b: 250}, 10, 5);
testBind();

// we can use bind method also like this way
var testBind1 = myFunc.bind({a: 400, b: 250});
testBind1(10, 5);