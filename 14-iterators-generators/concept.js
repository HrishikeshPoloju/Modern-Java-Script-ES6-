// 1️⃣ Iterator example (manual iterator)
const iterableObj = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < this.data.length) {
            return { value: this.data[index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  for (const val of iterableObj) {
    console.log(val); // 10, 20, 30
  }
  
  // 2️⃣ Generator function example
  
  function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = numberGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: undefined, done: true }
  
  // 3️⃣ Infinite generator example
  
  function* infiniteSequence() {
    let i = 0;
    while(true) {
      yield i++;
    }
  }
  
  const seq = infiniteSequence();
  
  console.log(seq.next().value); // 0
  console.log(seq.next().value); // 1
  console.log(seq.next().value); // 2
  
  // 4️⃣ Generator with return() and throw()
  
  function* genWithControl() {
    try {
      yield 'Start';
      yield 'Continue';
    } catch(e) {
      console.log('Error caught inside generator:', e);
    } finally {
      console.log('Generator cleanup');
    }
    return 'Done';
  }
  
  const g = genWithControl();
  console.log(g.next());           // {value: "Start", done: false}
  console.log(g.throw(new Error('Oops'))); // Logs error, {value: undefined, done: true}
  