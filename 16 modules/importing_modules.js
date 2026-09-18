// Importing Modules - brings exported code from external files into the current scope.
// Combines both named and default imports from relative file paths.

import User from './default_exports.js';
import { API_URL, fetchData } from './named_exports.js';

console.log(API_URL);
console.log(fetchData());