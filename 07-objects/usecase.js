// ✅ Use Case 1: Clean object creation (shorthand)
const createUser = (name, age) => ({ name, age });
console.log(createUser("Hrishi", 22)); // { name: 'Hrishi', age: 22 }

// ✅ Use Case 2: Dynamic property keys for flexible APIs
const propName = "status";
const data = { [propName]: "active" };
console.log(data); // { status: 'active' }

// ✅ Use Case 3: Define methods concisely in objects (especially in class-like structures)
const calculator = {
  add(x, y) { return x + y; },
  subtract(x, y) { return x - y; }
};
console.log(calculator.add(5, 3)); // 8

// ✅ Use Case 4: Use Object.is() for equality checks (safer than === in some cases)
console.log(Object.is(NaN, NaN)); // true

// ✅ Use Case 5: Merge configs immutably
const defaultConfig = { theme: "light" };
const userConfig = { theme: "dark", fontSize: 14 };
const finalConfig = Object.assign({}, defaultConfig, userConfig);
console.log(finalConfig); // { theme: 'dark', fontSize: 14 }

// ✅ Use Case 6: Iterate over object properties for data processing
const user = { name: "Hrishi", age: 22, active: true };
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
