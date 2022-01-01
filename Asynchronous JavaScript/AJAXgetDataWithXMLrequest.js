//  AJAX - Asynchronous JavaScript And XML
//  XML HTTP Request

/*
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let users = JSON.parse(xhr.response);
            console.log(users);
        } else {
            console.log(xhr.status);
        }
    }
}
xhr.send();

*/



//  Using Callback Function
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
//  Call the Function for getting Users
getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        res.map(r => console.log(r.name));
    }
});


//  Call the Function for getting Posts
getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
        res.forEach(r => console.log(r.title))
    }
});