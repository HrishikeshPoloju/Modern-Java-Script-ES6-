// ✅ Use Case 1: Handling API calls
async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if(!response.ok) throw new Error("Network response was not ok");
      const user = await response.json();
      console.log(user.name);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }
  fetchUserData(1);
  
  // ✅ Use Case 2: Running tasks in parallel with Promise.all
  async function loadAll() {
    try {
      const [users, posts] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
      ]);
      console.log(`Users count: ${users.length}, Posts count: ${posts.length}`);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }
  loadAll();
  
  // ✅ Use Case 3: Fallback with Promise.race (timeout example)
  function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
      fetch(url),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), timeout)
      )
    ]);
  }
  fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 2000)
    .then(res => res.json())
    .then(data => console.log("Data:", data))
    .catch(err => console.error(err.message));
  