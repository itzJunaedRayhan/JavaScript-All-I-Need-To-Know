let weakMap = new Map([['a', 10], ['b', 20]]);


a = null

console.log(weakMap.get('a'));
console.log(weakMap.has('a'));
console.log(weakMap.has('b'));