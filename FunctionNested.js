//  Nested Function or Inner Function()

function something (greet, name) {
    function getFirstName () {
        if (name) {
            return name.split(" ")[0];
        }
    }
    var message = greet + " " + getFirstName();
    console.log(message);
}
something("Good Afternoon", "Junaed Islam Rayhan");