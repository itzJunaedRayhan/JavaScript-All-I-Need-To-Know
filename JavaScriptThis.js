//  implicit Binding
//  explicit Binding
//  new Binding
//  window binding



//  Implicit
    // var Person = {
    //     name : "Junaed",
    //     age  : 22,
    //     printPlayerName : function () {
    //         console.log(this.name);
    //     }
    // }
    // Person.printPlayerName();



//  Implicit 
    // var PlayerInfo = function (obj) {
    //     obj.PlayerName = function () {
    //         console.log(this.name);
    //     };
    // };
    // var sakib = {
    //     name : "Sakib al Hassan",
    //     age  : 25
    // }
    // var afridi = {
    //     name : "Shahid Afridi",
    //     age  : 45
    // }

    // PlayerInfo(sakib);
    // PlayerInfo(afridi);

    // sakib.PlayerName();
    // afridi.PlayerName();



//  Implicit
    var Human = function (name, age) {
        return {
            name : name,
            age  : age,
            printName : function () {
                console.log(this.name);
            },
            father : {
                name : "MD Yousuf Ali",
                age  : 50,
                printName : function () {
                    console.log(this.name);
                }
            }
        }
    }

    var Junaed = Human("Junaed", 35);
    Junaed.printName();
    Junaed.father.printName();