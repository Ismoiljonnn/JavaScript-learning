// Named Exports - used to export multiple variables, functions, or classes from a single file.
// Each exported item must be imported using its exact name wrapped in curly braces.

export const API_URL = 'https://api.example.com';

export function fetchData() {
  return 'Fetching data...';
}

export const calculateTotal = (a, b) => a + b;