//  Generator

//  What is Generator Function:
    function* generator () {
        yield 1;
        yield 2;
        return "I am Finished";
        yield 3;
        yield 4;
    }
    let iterator = generator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());




    
//  Generator Function Syntax
    //  As Generator Function
    function *myGenerator () {}
    //  or...
    function* myGenerator1 () {}
    //  or...
    function * myGenerator2 () {}

    //  As a Generator Method
    const myGenerator3 = function *() {}

    //  Generator Arrow Function
    //  Can't use it with Arrow Functions
    //  let myGenerator4 = *() => {}

    //  Inside Class
    class myClass {
        *myGenerator5 () {}
    }

    //  Inside Object Literal
    const myObject = {
        *myGenerator6 () {}
    }




//  1.  Make Object Iterable
    let object = {
        a : 1,
        b : 2,
        c : 3,
        d : 4
    };

    //  1.1 Make Object Iterable Using [Symbol.iterator]():
    object[Symbol.iterator] = function () {
        let entries = Object.entries(object);
        let count   = 0;
        return {
            next () {
                if (count < entries.length) {
                    let result = {
                        done  : false,
                        value : entries[count][1]
                    }
                    count++;
                    return result;
                }
                return {
                    done  : true,
                    value : undefined
                }
            }
        }
    }
    let Iteration = object[Symbol.iterator]();
    console.log(Iteration.next());
    console.log(Iteration.next());
    console.log(Iteration.next());
    console.log(Iteration.next());
    console.log(Iteration.next());
    //  Using For Of Method
    for (element of object) {
        console.log(element);
    }
    //  Using Rest Operator
    console.log([...object])




    //  1.2 Make Object Iterable Using *Generator Function:
    let object1 = {
        a : 1,
        b : 2,
        c : 3,
        d : 4
    };
    function * Generator6 (object1) {
        let entries = Object.entries(object1);
        for (let element of entries) {
            yield element[1];
        }
    }
    let GenIterator = Generator6(object1);
    console.log(GenIterator.next());






//  2.  Second Example of Iteration
    //  2.1 Using Symbol.iteratin Way
    function range (start, end, step) {
        let count = start;
        return {
            [Symbol.iterator] : function () {
                return {
                    next () {
                        if (count <= end) {
                            let result = {
                                done  : false,
                                value : count
                            }
                            count += step;
                            return result;
                        }
                        return {
                            done  : true,
                            value : undefined
                        }
                    }
                }
            }
        }
    }
    let RangeFunc = range (1, 10, 2)[Symbol.iterator]();
    console.log(RangeFunc.next());
    console.log(RangeFunc.next());
    console.log(RangeFunc.next());
    console.log(RangeFunc.next());
    console.log(RangeFunc.next());
    console.log(RangeFunc.next());


    //  2.2 Using Generator Function way:
    function * Generator7 (start, end, step) {
        let count = start;
        while (count <= end) {
            yield count;
            count += step;
        }
    }
    let GeneratorWay = Generator7(10, 20, 5);
    console.log(GeneratorWay.next());
    console.log(GeneratorWay.next());
    console.log(GeneratorWay.next());
    console.log(GeneratorWay.next());





//  3.  Generator Conrtol Flow
    function * generator9 (a, b) {
        let k = yield a + b;
        let m = yield a + b + k;

        yield a + b + k + m;
    }
    let gen = generator9 (10, 20)
    console.log(gen.next());    //  30
    console.log(gen.next(50));  //  80
    console.log(gen.next(100)); //  180