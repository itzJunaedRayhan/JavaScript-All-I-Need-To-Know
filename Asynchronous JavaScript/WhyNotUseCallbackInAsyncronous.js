//  Why Not Use Callback in Asynchronous Javascript Cause in this method we need to use so many Callback function and it's very Complex 
function getRequest (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                callback(null, response)
            } else {
                callback(xhr.status, null)
            }
        }
    }
    xhr.send();
}


//  Calling The getRequest Function:
const BASE_URL = 'https://jsonplaceholder.typicode.com';
getRequest(`${BASE_URL}/posts/1`, (err, res) => {
    if (err) {
        throw new Error('Error Occurred');
    }
    getRequest(`${BASE_URL}/posts/${res.userId}`, (err, res) => {
        if (err) {
            throw new Error('Error Occurred');
        }
        getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
            if (err) {
                throw new Error('Error Occurred');
            }
            console.log(res);
        })
    })
})