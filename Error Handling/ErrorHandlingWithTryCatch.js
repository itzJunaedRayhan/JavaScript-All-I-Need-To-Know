//  Error Handling With Try and Catch:
function makeWords (text) {
    try {
        let str   = text.trim();
        let words = str.split(' ');
        return words;
    } catch (e) {
        //  return e.message;
        return  'Please Provide a valid Text';
    }
}
let words = makeWords(86);
console.log(words);