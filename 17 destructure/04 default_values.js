// Default Values - assigns fallback values if the unpacked element or property is undefined.

const colors = ['red'];
const [primary, secondary = 'blue'] = colors;

const settings = { theme: 'dark' };
const { theme, mode = 'active' } = settings;

console.log(secondary); // Output: "blue"
console.log(mode); // Output: "active"