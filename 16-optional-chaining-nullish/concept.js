// concept.js
// Explanation of Optional Chaining (?.) concept

/**
 * Optional Chaining (?.) allows safe access to nested properties or methods
 * without throwing errors if an intermediate property is null or undefined.
 *
 * Syntax:
 *   obj?.prop          // Access property safely
 *   obj?.[expr]        // Access property with dynamic key safely
 *   obj?.method?.()    // Call method safely
 *
 * Returns undefined if the left part is null or undefined, preventing runtime errors.
 */

// Example Conceptual Usage:
const user = {
    profile: {
      name: "Alice",
      contacts: {
        email: "alice@example.com"
      }
    },
    getProfile() {
      return this.profile;
    }
  };
  
  // Safe access to nested properties
  console.log(user.profile?.name);            // Alice
  console.log(user.profile?.contacts?.email); // alice@example.com
  console.log(user.profile?.contacts?.phone); // undefined (safe, no error)
  
  // Safe method call
  console.log(user.getProfile?.());  // { name: "Alice", contacts: { email: "alice@example.com" } }
  console.log(user.getSettings?.()); // undefined (safe, no error)
  
  // Safe access when the object might be null or undefined
  const noUser = null;
  console.log(noUser?.profile?.name); // undefined (safe, no error)
  