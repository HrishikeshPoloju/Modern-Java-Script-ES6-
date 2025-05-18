// ✅ Use Case 1: Lazy evaluation for large data

function* range(start, end) {
    for(let i = start; i <= end; i++) {
      yield i;
    }
  }
  
  for (const num of range(1, 5)) {
    console.log(num); // 1 2 3 4 5
  }
  
  // ✅ Use Case 2: Generating IDs on demand
  
  function* idGenerator() {
    let id = 0;
    while(true) {
      yield ++id;
    }
  }
  
  const ids = idGenerator();
  
  console.log(ids.next().value); // 1
  console.log(ids.next().value); // 2
  
  // ✅ Use Case 3: Custom iterable object
  
  const customIterable = {
    *[Symbol.iterator]() {
      yield 'a';
      yield 'b';
      yield 'c';
    }
  };
  
  for (const letter of customIterable) {
    console.log(letter); // a b c
  }
  