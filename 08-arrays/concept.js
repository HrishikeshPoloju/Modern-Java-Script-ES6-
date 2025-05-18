const numbers = [1, 2, 3, 4, 5];

// 🔹 1. map() - transform each item, returns new array
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 🔹 2. filter() - select items based on condition
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// 🔹 3. reduce() - reduce array to single value (accumulator)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 🔹 4. find() - returns first item matching condition
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2

// 🔹 5. findIndex() - index of first match
const indexFirstEven = numbers.findIndex(n => n % 2 === 0);
console.log(indexFirstEven); // 1

// 🔹 6. some() - checks if any item satisfies condition, returns bool
const hasNegative = numbers.some(n => n < 0);
console.log(hasNegative); // false

// 🔹 7. every() - checks if all items satisfy condition, returns bool
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// 🔹 8. flat() - flatten nested arrays by one level (default)
const nestedArr = [1, [2, 3], [4, [5, 6]]];
const flatArr = nestedArr.flat();
console.log(flatArr); // [1, 2, 3, 4, [5, 6]]

// 🔹 9. flatMap() - map then flatten by one level
const words = ["hello world", "foo bar"];
const letters = words.flatMap(w => w.split(" "));
console.log(letters); // ['hello', 'world', 'foo', 'bar']

// 🔹 10. includes() - check if array contains element
console.log(numbers.includes(3)); // true

// 🔹 11. sort() - sort array (in place)
const lettersArr = ["b", "a", "c"];
lettersArr.sort();
console.log(lettersArr); // ['a', 'b', 'c']
