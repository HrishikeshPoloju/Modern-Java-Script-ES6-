// ✅ Use Case 1: Clean state extraction in React
const [count, setCount] = useState(0);

// ✅ Use Case 2: Extract API response safely
const apiResponse = {
  data: {
    user: { name: "Hrishi", email: "h@example.com" }
  }
};

const {
  data: {
    user: { name, email }
  }
} = apiResponse;

console.log(name, email); // Hrishi h@example.com

// ✅ Use Case 3: Function param destructuring for cleaner props
function Button({ label, onClick }) {
  console.log(`Render button with label: ${label}`);
}
Button({ label: "Submit", onClick: () => {} });
