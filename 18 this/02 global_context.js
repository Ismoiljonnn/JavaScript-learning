// Global context behavior
// In browsers, 'this' at top level refers to 'window'.
// In Node.js, 'this' at top level refers to 'module.exports'.

function showGlobalThis() {
  // In non-strict mode: refers to global object
  // In strict mode: undefined
  console.log(this);
}

showGlobalThis();
