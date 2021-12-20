//  Array is Iterable so we can iterate it.
    let arr = [1, 2, 3];
    
    //  Iterate using For Loop
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    //  Iterate Using For of
    for (let ele of arr) {
        console.log(ele);
    }

    //  Iterate Array using Symbol.iteration()
    let ite = arr[Symbol.iterator]();
    console.log(ite.next());
    console.log(ite.next());
    console.log(ite.next());
    console.log(ite.next());

    //  Iterate Array Rest Operator
    console.log(...arr);

    //  Using Custom Iterator
    function iteration (collection) {
        let i = 0;
        return {
            next () {
                return {
                    done  : i >= collection.length,
                    value : collection[i++]
                }
            }
        }
    }
    let iterator = iteration(arr);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());








//  String is Iterable so we can iterate is.
    let str = 'JavaScript';

    //  Iterate String Using for loop
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

    //  Iterate String Using for of
    for (let strEle of str) {
        console.log(strEle);
    }

    //  Iterate String Using Rest Operator
    console.log(...str);

    //  Iterate String Using [Symbol.iterator]()
    let strIterator = str[Symbol.iterator]();
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());
    console.log(strIterator.next());







//  Object is not Iterable so we need to create a custom iterator for Object to Iterate.
    let obj = {
        a : 10,
        b : 15,
        [Symbol.iterator] : function () {
            let current = this.a;
            let self    = this;
            return {
                next () {
                    return {
                        done  : current > self.b,
                        value : current > self.b ? undefined : current++
                    }
                }
            }
        }
    }
    let IteObj = obj[Symbol.iterator]();
    console.log(IteObj.next());
    console.log(IteObj.next());
    console.log(IteObj.next());
    console.log(IteObj.next());
    console.log(IteObj.next());
    console.log(IteObj.next());
    console.log(IteObj.next());


    //  Iterate Object using for of
    for (let eleObj of obj) {
        console.log(eleObj);
    }

    //  Iterate Object Using Rest Operator
    console.log(...obj);








//  Example 1 of Iteration
    function range (start, end, step) {
        let count = start;
        let self  = end; 
        return {
            [Symbol.iterator] : function () {
                return {
                    next () {
                        if (count <= self) {
                            let result = {
                                done  : false,
                                value : count
                            }
                            count += step;
                            return result;
                        }
                        return {
                            done : true
                        }
                    }
                }
            }
        }
    }
    console.log([...range(1, 100, 2)]);







//  Example 2
    String[Symbol.iterator] = function () {
    let count = this.length;
    return {
        next () {
            if (count > 0) {
                count--;
                return {
                    done  : false,
                    value : "JavaScript"
                    }
                } else {
                    return {
                    done : true,
                    }
                }
            }
        }
    }
    console.log([..."Bangladesh"]);