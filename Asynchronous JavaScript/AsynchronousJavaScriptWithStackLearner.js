let BASE_URL = 'https://jsonplaceholder.typicode.com';


//  GET Request Function:
function getRequest (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                callback(null, response);
            } else {
                callback(xhr.status, null);
            }
        }
    }
    xhr.send();
}

//  Call the getRequest Function:
getRequest(`${BASE_URL}/posts/1`, (err, res) => {
    if (err) {
        throw new Error('Error Occurred');
    } 
    let {userId} = res;
    getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
        if (err) {
            throw new Error('Error Occurred'); 
        }
        let {id} = res;
        getRequest(`${BASE_URL}/photos/${id}`, (err, res) => {
            if (err) {
                throw new Error('Error Occurred'); 
            }
            console.log(res.url)
        })
    })
})








//  Promise
//  Create a Promise
function getIphone (isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            isPassed ? resolve("I have Got an Iphone X") : reject(new Error ("You Have Failed"));
        }, 3000)
    })
}
//  Call the Promise
getIphone(true)
.then((res) => console.log(res))
.catch((err) => console.log(err.message))
.finally(() => console.log("That's all about Promise"));










//  Promise With XML Http Request
const MAIN_URL = 'https://jsonplaceholder.typicode.com';
//  Create a getPrimaryData Function which returns a Promise
function getPrimaryData (url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = () => {
            setTimeout(() => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let response = JSON.parse(xhr.response);
                        resolve(response);
                    }
                    reject(xhr.status);
                }
            },1000)
        }
        xhr.send();
    })
}
//  Call the Promise
getPrimaryData(`${MAIN_URL}/posts/1`)
.then((res) => getPrimaryData(`${MAIN_URL}/users/${res.userId}`))
.then((res) =>  getPrimaryData(`${MAIN_URL}/photos/${res.id}`))
.then((res) => console.log(res.url))
.catch((err) => {
    console.log(err)
})








//  using fetch API
const JP_URL = 'https://jsonplaceholder.typicode.com';
//  fetch API and setTimeOut is a Promise
fetch(`${JP_URL}/posts/1`)
.then((res) => res.json())
.then((res) => fetch(`${JP_URL}/users/${res.userId}`))
.then((res) => res.json())
.then((data) => fetch(`${JP_URL}/photos/${data.id}`))
.then((res) => res.json())
.then((data) => {
    setTimeout(() => {
        console.log(data.url)
    },5000)
})
.catch((err) => console.log(err));










//  Promise.all() and Promise.race():
let p1 = new Promise(resolve => setTimeout(resolve, 5000, 'One'));
let p2 = new Promise(resolve => setTimeout(resolve, 3000, 'Two'));
let p3 = new Promise(resolve => setTimeout(resolve, 4000, 'Three'));
let PromiseArray = [p1, p2, p3];

//  Promise.all(array of Promises)
    Promise.all(PromiseArray)
    .then(res => console.log(res));


//  Promise.race(array of Promise)
    Promise.race(PromiseArray)
    .then(res => console.log(res));











//  Async Await 
    let r1 = new Promise(resolve => setTimeout(resolve, 4000, 'Test Value'));
    async function myAsyncFunc () {
        let v = await r1
        console.log(v);
    }
    myAsyncFunc()


//  another async await Example
    async function fetchData () {
        try {
            let userData = await fetch('https://jsonplaceholder.typicode.com/users')
            let data     = await userData.json()
            let names    = data.map(res => res.name);
            console.log(names)
        } catch(e) {
            console.log(e.message)
        }
    }
    fetchData()


//  Promise.all() with async await:
    let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
    async function promiseAll () {
        let result = await Promise.all(promises);
        console.log(result);
    }
    promiseAll()





    




//  Async Iterator
let asyncIterator =  {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next () {
                if (i < 4) {
                    return Promise.resolve({
                        value : i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        value : undefined,
                        done : true
                    })
                }
            }
        }
    }
}
let iterator = asyncIterator[Symbol.asyncIterator]();
(async function() {
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
    console.log(await iterator.next())
})()









//  Async Generator
async function* AsyncGenerator () {
    let i = 0
    while (true) {
        if (i > 5) return
        yield await Promise.resolve(i++)

    }
}
(async function () {
    for await (let v of AsyncGenerator()) {
        console.log(v);
    }
})()