let asyncIterator = {
    [Symbol.asyncIterator] () {
        let i = 0;
        return {
            next () {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false
                    })
                } else {
                    return Promise.resolve({
                        done: true
                    })
                }
            }
        }
    }
}
let iterate = asyncIterator[Symbol.asyncIterator]();
(async function () {
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
    console.log(await iterate.next())
})()