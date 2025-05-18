// usecase.js
// Practical Use Cases of Nullish Coalescing (??)

function greet(user) {
    // Use nullish coalescing to provide default name only if user.name is null or undefined
    const userName = user.name ?? "Guest";
    console.log(`Hello, ${userName}!`);
  }
  
  greet({ name: "Alice" });    // Hello, Alice!
  greet({ name: "" });         // Hello, !
  greet({ name: null });       // Hello, Guest!
  greet({});                   // Hello, Guest!
  
  // Setting default values in config objects
  
  const config = {
    retries: 0,
    timeout: undefined,
  };
  
  const retries = config.retries ?? 3;
  const timeout = config.timeout ?? 5000;
  
  console.log(retries); // 0
  console.log(timeout); // 5000
  