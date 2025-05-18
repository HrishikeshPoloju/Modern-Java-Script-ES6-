// Demonstrating let & const scope and reassignment

// let: block-scoped, can be reassigned
let counter = 0;
counter += 1;
console.log("let counter:", counter); // 1

// const: block-scoped, cannot be reassigned
const name = "Hrishi";
console.log("const name:", name); // Hrishi

// const object: properties can still be changed
const user = { age: 20 };
user.age = 21;
console.log("const object age:", user.age); // 21
