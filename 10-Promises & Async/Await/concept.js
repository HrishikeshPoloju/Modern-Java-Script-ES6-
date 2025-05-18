// 🔹 Creating a Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if(success) resolve("Data fetched successfully!");
        else reject("Failed to fetch data.");
      }, 1000);
    });
  };
  
  // 🔹 Using .then() and .catch()
  fetchData()
    .then(data => console.log(data))      // Data fetched successfully!
    .catch(err => console.error(err))
    .finally(() => console.log("Fetch attempt finished"));
  
  // 🔹 Promise chaining
  fetchData()
    .then(data => {
      console.log(data);
      return "Next step";
    })
    .then(msg => console.log(msg))
    .catch(err => console.error(err));
  
  // 🔹 Async/Await version
  async function getData() {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Async fetch finished");
    }
  }
  getData();
  
  // 🔹 Promise combinators
  const promise1 = Promise.resolve(3);
  const promise2 = new Promise(resolve => setTimeout(resolve, 100, "foo"));
  const promise3 = 42;
  
  Promise.all([promise1, promise2, promise3])
    .then(values => console.log("Promise.all results:", values));  // [3, 'foo', 42]
  
  Promise.race([promise1, promise2, promise3])
    .then(value => console.log("Promise.race result:", value));    // 3
  
  Promise.allSettled([promise1, promise2, promise3])
    .then(results => console.log("Promise.allSettled:", results));
  
  Promise.any([promise1, promise2, promise3])
    .then(value => console.log("Promise.any result:", value));      // 3
  