// 1️⃣ Named Exports

// utils.js
export function add(a, b) {
    return a + b;
  }
  
  export const PI = 3.1415;
  
  // 2️⃣ Default Export
  
  // calculator.js
  export default function subtract(a, b) {
    return a - b;
  }
  
  // 3️⃣ Importing Named Exports
  
  // main.js
  import { add, PI } from './utils.js';
  
  console.log(add(5, 3)); // 8
  console.log(PI);        // 3.1415
  
  // 4️⃣ Importing Default Export
  
  import subtract from './calculator.js';
  
  console.log(subtract(10, 4)); // 6
  
  // 5️⃣ Import All
  
  import * as Utils from './utils.js';
  
  console.log(Utils.add(2, 2));  // 4
  console.log(Utils.PI);          // 3.1415
  
  // 6️⃣ Dynamic Import (Code Splitting)
  
  async function loadModule() {
    const math = await import('./calculator.js');
    console.log(math.default(20, 5)); // 15
  }
  
  loadModule();
  
  // 7️⃣ Module Scope
  
  // Variables declared in modules are local to the module and do not pollute global scope.
  
  // 8️⃣ Circular dependencies (brief note)
  
  // Circular imports can cause undefined errors and should be avoided or handled carefully.
  