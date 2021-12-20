//  Default Parameter:

//  if we unfortunately forgot to pass argument then we can set a default parameter.
//  in this example we used 10 as a default parameter of n.
//  after set a default parameter and we also pass arguments then the parameter will be passed argument.
function sqr (n = 10) {
    return n * n;
}
console.log(sqr());





//  if we use default parameter then we can't use 'null' as a argument.
//  another example
function greet (name = 'Junaed Islam', msg = 'Hello World!') {
    console.log(name.length);
    console.log(`${msg} : ${name}`);
}
// greet(null, 'passed as a argument');
greet(undefined, 'passed as a argument');
