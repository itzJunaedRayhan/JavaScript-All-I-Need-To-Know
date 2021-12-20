var str = "Hello i am junaed10 islamm";
var strArr = str.split(" ");


//  using SORT Method
    // maxWord = strArr.sort((a , b) => a.length > b.length ? -1 : 1);
    // console.log(maxWord[0].length);


    
//  using For Loop
    // var maxWordLength = 0;
    // var maxWord;
    // for (let i = 0; i < strArr.length; i++) {
    //     if(strArr[i].length > maxWordLength) {
    //         maxWordLength = strArr[i].length;
    //         maxWord = strArr[i];
    //     }
    // }
    // console.log(maxWord, maxWordLength);



//  using Reduce Method
    var LongestWord = strArr.reduce((a , b) => {
        if(a.length > b.length) {
            return a;
        } else {
            return b;
        }
    });
    console.log(LongestWord.length)