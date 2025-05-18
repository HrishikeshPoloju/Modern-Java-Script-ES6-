// Creating a Set and adding values
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); // duplicate, ignored
numbers.add('3');

console.log(numbers.size);  // 3
console.log(numbers.has(2)); // true
console.log(numbers.has(4)); // false

// Iterating over Set
for (const num of numbers) {
  console.log(num); // 1, 2, '3'
}

// Create Set from Array (removes duplicates)
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = new Set(nums);
console.log([...uniqueNums]); // [1, 2, 3, 4, 5]

// Deleting elements
uniqueNums.delete(3);
console.log(uniqueNums.has(3)); // false

// Clearing all elements
uniqueNums.clear();
console.log(uniqueNums.size); // 0
