// Renaming Imports and Exports - uses 'as' keyword to prevent naming conflicts.

// Renaming during export
const internalName = 'Secret Code';
export { internalName as publicName };

// Renaming during import
import { fetchData as getData } from './02. named_exports.js';

console.log(getData());