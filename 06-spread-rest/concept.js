// 🔹 1. Spread with Arrays - cloning and merging
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // clone
const arr3 = [...arr1, 4, 5]; // merge + add

console.log(arr2); // [1, 2, 3]
console.log(arr3); // [1, 2, 3, 4, 5]

// 🔹 2. Spread with Objects - cloning and merging
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 }; // clone
const obj3 = { ...obj1, c: 3 }; // merge + add

console.log(obj2); // { a: 1, b: 2 }
console.log(obj3); // { a: 1, b: 2, c: 3 }

// 🔹 3. Rest parameters in functions - gather remaining args
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

// 🔹 4. Rest in array destructuring - gather remaining items
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first, second); // 10 20
console.log(rest); // [30, 40, 50]

// 🔹 5. Rest in object destructuring - gather remaining props
const { a, b, ...others } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a, b); // 1 2
console.log(others); // { c: 3, d: 4 }
