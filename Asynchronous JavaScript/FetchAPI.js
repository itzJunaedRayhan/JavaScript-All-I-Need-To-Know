//  Implement Fetch API
const BASE_URL = 'https://jsonplaceholder.typicode.com';
fetch(`${BASE_URL}/users/1`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return Promise.resolve('Something')
    })
    .then(str => {
        console.log(str);
        return Promise.resolve('Another Promise')
    })
    .then(another => {
        console.log(another);
    })
    .catch(err => {
        console.log(err)
    })


//  Using XML Request and Promise
const MAIN_URL = 'https://jsonplaceholder.typicode.com';
function getRequest (url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url)
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let response = JSON.parse(xhr.response);
                    resolve(response);
                } else {
                    reject(xhr.status);
                }
            }
        }
        xhr.send();
    })
}
getRequest(`${MAIN_URL}/users/2`)
    .then(data => console.log(data))
    .catch(err => console.log(err));