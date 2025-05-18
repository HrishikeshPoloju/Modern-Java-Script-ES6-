// Use case: Dynamic HTML rendering in JS
const user = { name: "Hrishi", age: 21 };

const html = `
  <div class="card">
    <h2>${user.name}</h2>
    <p>Age: ${user.age}</p>
  </div>
`;

console.log(html);
