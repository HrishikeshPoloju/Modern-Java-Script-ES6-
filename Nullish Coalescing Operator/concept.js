// concept.js
// Explanation of Nullish Coalescing Operator (??)

/**
 * Nullish Coalescing (??) returns the right-hand side operand
 * only when the left-hand side operand is null or undefined.
 * 
 * This is different from the OR (||) operator which returns the right side
 * if the left side is any falsy value (0, '', false, null, undefined).
 * 
 * Syntax:
 *    let result = value ?? defaultValue;
 */

// Examples:

const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName);  // Guest

const count = 0;
console.log(count ?? 10);           // 0 (0 is not null or undefined)

const emptyStr = "";
console.log(emptyStr ?? "default"); // "" (empty string is not null or undefined)
