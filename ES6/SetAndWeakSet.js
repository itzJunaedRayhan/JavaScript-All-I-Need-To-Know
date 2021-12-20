//  ES6 Set() - Set Only Store Unique Values.
/*
    //  Set Declaration and Initialization:
    let set = new Set([10, 20, 30]);
    
    //  Set Methods:
        //  add();
        set.add(50);
        set.add(60);
        set.add(10);     //  you can't add existing element
        set.add(20);     //  you can't add existing element
    
    //  Set.clear()
        //  set.clear()

    //  Set.has()
         console.log(set.has(20));

    //  Set.entries()
         console.log(set.entries());

    //  Set.keys()
         console.log(set.keys());

    //  Set.values()
         console.log(set.values())

    //  Set.delete()
         set.delete(50);

    //  Set.size
         console.log(set.size);


    //  iterate set values
        let keyIterate = set.values();
        console.log(keyIterate.next());
        console.log(keyIterate.next());


    //  iterate Set using for of
        for (let element of set) {
            console.log(element)
        }

    console.log(set.values())

*/



let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

//  Example 1:- Union
    let union = new Set([...a, ...b]);
    console.log(union);

//  Example 2:- intersection
    let intersection = new Set([...a].filter(x => x = b.has(x)));
    console.log(intersection);

//  Example 2:- difference
    let difference = new Set([...a].filter(x => !b.has(x)));
    console.log(difference);










/****************   WEAK SET    ******************/
//  WeakSet()
    //  WeakSet() only Store Object type data
    //  WeakSet() are not Iterable.

//  Example 1:
    const ws = new WeakSet();
    class SomeClass {
        constructor () {
            ws.add(this);
        }
        method () {
            if (!ws.has(this)) {
                throw new Error('You cannot Access this method directly!');
            } else {
                return 'I am Method';
            }
        }
    }
    const weakset = new SomeClass();
    console.log(weakset.method());
    //  console.log(SomeClass.prototype.method());


    

//  Example 2:
    //  Problem - null is not working
    let x = {a : 10}, y = {b : 20}
    //  create a Set
    let set = new Set([x, y]);
    x = null;   
    console.log(set);
    let arr = [...set];
    console.log(arr[0]);    //  {a : 10}
    //  in Set, null is not working



    //  Solution - WeakSet(), where null will work properly
    //  WeakSet only takes Object as value and it doesn't take any Primitive data
    let p = {a : 10}, q = {b : 20}
    let weakSet = new WeakSet([p, q]);
    p = null;
    console.log(weakSet);

    //  WeakSet.has()
    console.log(weakSet.has(p));
    console.log(weakSet.has(q));