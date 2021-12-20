//  ES6 map

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
])
//  console.log(map)


//  map.set() to add new property and value
map.set('d', 40);


//  set an Object as property in map
map.set({name: 'Junaed'}, 50);


//  map.get() to get any specific value from map
console.log(map.get('c'))


//  map.keys() to get all keys from map
console.log(map.keys());


//  map.values() to get all values from map
console.log(map.values());


//  map.entries() to get all entries from map
console.log(map.entries());


//  map iteration
let iterateMap = map.values();
console.log(iterateMap.next());
console.log(iterateMap.next());
console.log(iterateMap.next());
console.log(iterateMap.next());
console.log(iterateMap.next());


//   map iteration in only for values using for of 
for (let element of map.values()) {
    console.log(element);
}



//   map iteration in for keys and values using for of 
for (let [keys, values] of map) {
    console.log(keys, values);
}


//  map iteration using forEach() method
map.forEach((v, k) => {
    console.log(k, v);
})


console.log(map)