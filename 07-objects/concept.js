// 🔹 1. Shorthand Property Names
const name = "Hrishi";
const age = 22;
const user = { name, age };
console.log(user); // { name: 'Hrishi', age: 22 }

// 🔹 2. Computed Property Names
const key = "email";
const userWithComputedKey = {
  [key]: "hrishi@example.com"
};
console.log(userWithComputedKey); // { email: 'hrishi@example.com' }

// 🔹 3. Method Definitions (Method Shorthand)
const userMethods = {
  greet() {
    console.log("Hello!");
  },
  ageInYears() {
    return this.age;
  },
  age: 22
};
userMethods.greet(); // Hello!
console.log(userMethods.ageInYears()); // 22

// 🔹 4. Object.is() - checks strict equality with special cases
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false
console.log(Object.is({}, {}));   // false (different objects)

// 🔹 5. Object.assign() - merges source objects into target object
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
const merged = Object.assign(target, source1, source2);
console.log(merged); // { a: 1, b: 2, c: 3 }

// 🔹 6. Object.entries(), Object.keys(), Object.values()
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [['a',1], ['b',2], ['c',3]]
console.log(Object.keys(obj));    // ['a', 'b', 'c']
console.log(Object.values(obj));  // [1, 2, 3]
// 🔹 7. Object.freeze() - makes an object immutable