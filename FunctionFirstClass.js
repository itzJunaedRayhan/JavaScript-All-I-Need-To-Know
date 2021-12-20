//  First Class Function
    function add (a, b) {
        return a + b;
    }
    //  1.  A Function can be Storen in variable.
        var sum = add;
        console.log(sum(4, 5));
        console.log(typeof(sum));


    //  2.  A Function can be Storen in an Array.
        var arr = [];
        arr.push(sum);
        console.log(arr);
        console.log(arr[0](3, 5));


    //  3.  A Function can be Stored in an Object.
        var obj = {
            total : add
        }
        console.log(obj);
        console.log(obj.total(7, 9));


    //  4.  We can create Function as we needed.
        setTimeout(function () {
            console.log(add(10, 20));
        }, 1000)


        
    //  5.  We can Pass Function as an Argument. 
    //  6.  We can return Function From another Function.
    function add (x, y) {
        return x + y;
    }
    function manipulate (a , b, func) {
        c = a + b;
        d = a - b;
        
        return function () {
            var m = func (a, b)
            return c * d * m;
        }
    }
    var result = manipulate(3, 4, add);
    console.log(result());