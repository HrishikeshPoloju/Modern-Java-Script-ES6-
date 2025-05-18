// usecase.js
// Practical Use Cases of Optional Chaining (?.)

const userData = {
    id: 123,
    profile: {
      name: "Alice",
      contacts: {
        email: "alice@example.com",
        phones: ["123-4567", "987-6543"]
      }
    },
    getProfile() {
      return this.profile;
    }
  };
  
  // 1. Access nested object properties safely
  console.log("User's city:", userData.profile?.address?.city);  // undefined (no error)
  
  // 2. Access array elements safely
  console.log("First phone number:", userData.profile?.contacts?.phones?.[0]); // 123-4567
  
  // 3. Call a method if it exists
  console.log("Profile returned by method:", userData.getProfile?.());
  
  // 4. Attempt to call a non-existent method safely
  console.log("Settings:", userData.getSettings?.()); // undefined
  
  // 5. Dynamic property access
  const key = 'profile';
  console.log("Dynamic key access:", userData?.[key]?.name); // Alice
  
  // 6. Optional chaining on null or undefined object
  const maybeUser = undefined;
  console.log("Maybe user email:", maybeUser?.profile?.contacts?.email); // undefined
  