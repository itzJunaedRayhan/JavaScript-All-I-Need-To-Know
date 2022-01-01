//  Error Handling With If Else
function changeToInt (value) {
    let result = parseInt(value);
    if (!result) {
        return 'Please Provide a value which is able to convert in Integer'
    }
    return result
}
let FinalResult = changeToInt('54.55');
console.log(FinalResult);