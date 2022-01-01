//  How to store result from Async Function in JavaScript:
function sayMyName (name) {
    setTimeout(() => {
        console.log('I have Done...');
    }, 3000);
}
let output = sayMyName('Junaed');
console.log(output)