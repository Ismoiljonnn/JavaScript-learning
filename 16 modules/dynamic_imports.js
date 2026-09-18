// Dynamic Imports - loads modules asynchronously on demand using import() function.
// Returns a promise and helps optimize performance by code splitting.

async function loadMathModule() {
  const math = await import('./named_exports.js');
  console.log(math.calculateTotal(5, 10));
}

loadMathModule();