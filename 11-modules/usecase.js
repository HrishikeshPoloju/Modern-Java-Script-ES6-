// ✅ Use Case 1: Splitting code for better organization

// mathUtils.js
export function multiply(a, b) {
    return a * b;
  }
  
  // app.js
  import { multiply } from './mathUtils.js';
  
  console.log(multiply(6, 7)); // 42
  
  // ✅ Use Case 2: Default export for main functionality
  
  // logger.js
  export default function log(message) {
    console.log(`[LOG]: ${message}`);
  }
  
  // main.js
  import log from './logger.js';
  
  log('Application started.');
  
  // ✅ Use Case 3: Dynamic import for lazy loading
  
  document.getElementById('loadBtn').addEventListener('click', async () => {
    const { default: loadFeature } = await import('./feature.js');
    loadFeature();
  });
  