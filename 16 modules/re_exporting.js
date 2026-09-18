// Re-exporting - imports elements from another module and immediately exports them.
// Commonly used in index files to create a unified entry point for multiple modules.

export { API_URL, fetchData } from './named_exports.js';
export { default as User } from './default_exports.js';