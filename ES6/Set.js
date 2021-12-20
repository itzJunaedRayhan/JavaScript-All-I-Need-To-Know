//  ES6 Set()

let set = new Set([10, 20, 30]);
set.add(50);
set.add(60);
set.add(10);     //  you can't add existing element
set.add(20);     //  you can't add existing element

//  Set.clear()
    //  set.clear()

//  Set.has()
    //  console.log(set.has(20));

//  Set.entries()
    //  console.log(set.entries());

//  Set.keys()
    //  console.log(set.keys());

//  Set.values()
    //  console.log(set.values())

//  Set.delete()
    //  set.delete(50);

//  Set.size
    //  console.log(set.size);


//  iterate set values
    // let keyIterate = set.values();
    // console.log(keyIterate.next());
    // console.log(keyIterate.next());


//  iterate Set using for of
    // for (let element of set) {
    //     console.log(element)
    // }


    console.log(set.values())