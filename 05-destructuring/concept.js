// 🔹 1. Array Destructuring
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

// 🔹 2. Skip Elements
const [first, , third] = ["a", "b", "c"];
console.log(first, third); // a c

// 🔹 3. Swap Variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// 🔹 4. Object Destructuring
const user = { name: "Hrishi", age: 22 };
const { name, age } = user;
console.log(name, age); // Hrishi 22

// 🔹 5. Rename while destructuring
const { name: userName } = user;
console.log(userName); // Hrishi

// 🔹 6. Default Values
const { city = "Pune" } = user;
console.log(city); // Pune

// 🔹 7. Nested Object Destructuring
const profile = {
  info: {
    username: "hrishi",
    stats: {
      followers: 1200,
      likes: 300
    }
  }
};

const {
  info: {
    username,
    stats: { followers }
  }
} = profile;

console.log(username, followers); // hrishi 1200

// 🔹 8. Nested Array/Object combo
const response = [
  {
    id: 1,
    details: {
      name: "Hrishi",
      roles: ["admin", "user"]
    }
  }
];

const [
  {
    details: {
      name: fullName,
      roles: [primaryRole]
    }
  }
] = response;

console.log(fullName, primaryRole); // Hrishi admin

// 🔹 9. Destructuring in function parameters
function showUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
showUser({ name: "Hrishi", age: 22 });
