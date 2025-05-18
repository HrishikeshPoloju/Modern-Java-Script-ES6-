// Creating a Map and setting key-value pairs
const map = new Map();

map.set('name', 'Alice');
map.set(1, 'one');
map.set(true, 'yes');

// Using objects as keys
const keyObj = {};
map.set(keyObj, 'Object as key');

console.log(map.size); // 4
console.log(map.get('name')); // Alice
console.log(map.get(keyObj)); // Object as key
console.log(map.has(1)); // true

// Iterating over Map (entries, keys, values)
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
// name Alice
// 1 one
// true yes
// {} Object as key

for (const key of map.keys()) {
  console.log('key:', key);
}

for (const value of map.values()) {
  console.log('value:', value);
}

// Deleting keys
map.delete(1);
console.log(map.has(1)); // false

// Clearing Map
map.clear();
console.log(map.size); // 0
console.log(map.get('name')); // undefined