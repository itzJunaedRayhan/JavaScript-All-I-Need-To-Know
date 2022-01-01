//  Promise
let p1 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 5000, 'One')
});

let p2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 3000, 'Two')
});

// console.log(p1);
// console.log(p2);

p1.then((value) => {
    console.log(value);
});

p1.catch((err) => {
    console.log(err);
})

p2.then ((value) => {
    console.log(value);
})

p2.catch ((err) => {
    console.log(err);
})


let r1 = new Promise.resolve('One');
let r2 = new Promise.resolve('Two');
let r3 = new Promise.resolve('Three');
let PromiseArr = [r1, r2, r3]
Promise.all(PromiseArr)
    .then(res => console.log(res));

    let s1 = new Promise(resolve => {
        setTimeout(resolve, 3000, 'One')
    })
    let s2 = new Promise(resolve => {
        setTimeout(resolve, 9000, 'Two')
    })
    let s3 = new Promise(resolve => {
        setTimeout(resolve, 5000, 'Three')
    })
    let PromiseArr1 = [s1, s2, s3];
    
//  Promise.all(array)
    Promise.all(PromiseArr1)
    .then(response => console.log(response));
  
        

//  Promise.race(array)
    Promise.race(PromiseArr1)
    .then(response => console.log(response));






//  Promise uses like that
function getIphone (isPassed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPassed) {
                resolve('I have got an IPhone');
            } else {
                reject(new Error('You Have Failed'));
            }
        }, 2000)
    })
}
//  console.log(getIphone(false));

getIphone(false).then((value) => {
    console.log(value)
}).catch((err) => {
    console.log(err)
})