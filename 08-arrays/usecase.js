// ✅ Use Case 1: Transform API response data with map()
const users = [
    { id: 1, name: "Hrishi" },
    { id: 2, name: "Alice" }
  ];
  const userNames = users.map(user => user.name);
  console.log(userNames); // ['Hrishi', 'Alice']
  
  // ✅ Use Case 2: Filter active users
  const activeUsers = users.filter(user => user.active === true);
  console.log(activeUsers); // [] (if no active user)
  
  // ✅ Use Case 3: Sum total price of cart items with reduce()
  const cart = [
    { item: "Book", price: 10 },
    { item: "Pen", price: 2 }
  ];
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice); // 12
  
  // ✅ Use Case 4: Find first premium user
  const premiumUser = users.find(user => user.isPremium);
  console.log(premiumUser); // undefined if none
  
  // ✅ Use Case 5: Check if any user is admin with some()
  const hasAdmin = users.some(user => user.role === "admin");
  console.log(hasAdmin); // false
  
  // ✅ Use Case 6: Verify all users are active with every()
  const allActive = users.every(user => user.active);
  console.log(allActive); // false
  
  // ✅ Use Case 7: Flatten nested categories for UI
  const categories = [
    "Books",
    ["Fiction", "Non-fiction"],
    ["Sci-fi", ["Space", "Aliens"]]
  ];
  const flatCategories = categories.flat(2);
  console.log(flatCategories); // ['Books', 'Fiction', 'Non-fiction', 'Sci-fi', 'Space', 'Aliens']
  
  // ✅ Use Case 8: Use flatMap to split sentences into words
  const sentences = ["hello world", "js is fun"];
  const wordsArr = sentences.flatMap(s => s.split(" "));
  console.log(wordsArr); // ['hello', 'world', 'js', 'is', 'fun']
  
  // ✅ Use Case 9: Check if item exists in list
  const fruits = ["apple", "banana"];
  console.log(fruits.includes("apple")); // true
  
  // ✅ Use Case 10: Sort users by age
  const usersWithAge = [
    { name: "Hrishi", age: 22 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 }
  ];
  usersWithAge.sort((a, b) => a.age - b.age);
  console.log(usersWithAge);
  /* [
    { name: 'Bob', age: 20 },
    { name: 'Hrishi', age: 22 },
    { name: 'Alice', age: 25 }
  ] */
  