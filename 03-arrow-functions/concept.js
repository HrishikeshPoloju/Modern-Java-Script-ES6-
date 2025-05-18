// Arrow function syntax
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Lexical `this`
const person = {
  name: "Hrishi",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, I'm ${this.name}`);
    }, 1000);
  },
};
person.greet(); // 'Hello, I'm Hrishi'
