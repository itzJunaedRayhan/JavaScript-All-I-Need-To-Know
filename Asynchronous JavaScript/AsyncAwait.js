//  Async and Await In JavaScript
async function test () {
    return 'Test';
}
test().then(v => console.log(v)).catch(err => console.log(err))



//  another example
let p1 = new Promise(resolve => {
    setTimeout(resolve, 3000, 'Test value');
})
async function myAsyncFunc () {
    let v = await p1;
    console.log(v);
}
myAsyncFunc()




//  Using FetchAPI
async function fetchData () {
    try {
        let res  = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await res.json();
        //  console.log(data);
        let names = data.map(u => u.name)
        console.log(names);
    } catch (e) {
        console.log(e.message)
    }
}
fetchData()





//  For Multiple Promises
let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
async function promiseAll () {
    let result = await Promise.all(promises)
    console.log(result);
}
promiseAll()