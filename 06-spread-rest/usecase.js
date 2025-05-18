// ✅ Use Case 1: Immutable update in Redux reducers
const state = { name: "Hrishi", age: 22 };
const newState = { ...state, age: 23 };
console.log(newState); // { name: 'Hrishi', age: 23 }

// ✅ Use Case 2: Merging API params dynamically
const defaultParams = { limit: 10, sort: "asc" };
const userParams = { sort: "desc", page: 2 };
const finalParams = { ...defaultParams, ...userParams };
console.log(finalParams); // { limit: 10, sort: 'desc', page: 2 }

// ✅ Use Case 3: Function accepting variable args
function logAll(...messages) {
  messages.forEach((msg, i) => console.log(`Msg${i}:`, msg));
}
logAll("Hi", "Hello", "Welcome");

// ✅ Use Case 4: Extract remaining props for forwarding in React
const Button = ({ type, ...rest }) => {
  return <button type={type} {...rest}>Click</button>;
};
