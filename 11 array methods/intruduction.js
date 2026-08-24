// JavaScript Array Methods – Built-in methods designed to 
// simplify array manipulation and iteration.

// concat()     Binds two or more arrays together and returns the result => Immutable
// indexOf()    Searches the array for an element and returns its index => Immutable
// find()       Returns the first element that satisfies a testing condition => Immutable
// findIndex()  Returns the index of the first element that satisfies a testing condition => Immutable
// forEach()    Executes a callback function once for each array element => Immutable
// map()        Calls a function on each element and returns a new array with the results => Immutable
// filter()     Filters elements matching a condition and returns a new array => Immutable
// includes()   Checks if an array contains a specific value => Immutable
// unshift()    Adds an element to the start of an array and returns the new length => Not Immutable
// pop()        Removes the last element from an array and returns the removed element => Not Immutable
// shift()      Removes the first element from an array and returns the removed element => Not Immutable
// sort()       Sorts elements alphabetically as strings in ascending order => Not Immutable
// slice()      Extracts a section of an array and returns a new array => Immutable
// splice()     Removes, replaces, or adds elements in place => Not Immutable

// 1. concat()
const res1 = [1, 2].concat([3, 4]); // [1, 2, 3, 4]

// 2. indexOf()
const res2 = ['js', 'java', 'go'].indexOf('java'); // 1

// 3. find()
const res3 = [10, 25, 30].find(n => n > 20); // 25

// 4. findIndex()
const res4 = [10, 25, 30].findIndex(n => n > 20); // 1

// 5. forEach()
['js', 'py'].forEach(item => console.log(item));

// 6. map()
const res6 = [1, 2, 3].map(n => n * 2); // [2, 4, 6]

// 7. filter()
const res7 = [1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// 8. includes()
const res8 = ['js', 'java'].includes('js'); // true

// 9. unshift()
const list1 = ['java', 'go'];
list1.unshift('js'); // list1 -> ['js', 'java', 'go']

// 10. pop()
const list2 = ['js', 'java', 'go'];
const popped = list2.pop(); // popped = 'go', list2 -> ['js', 'java']

// 11. shift()
const list3 = ['js', 'java', 'go'];
const shifted = list3.shift(); // shifted = 'js', list3 -> ['java', 'go']

// 12. sort()
const list4 = [3, 1, 2];
list4.sort((a, b) => a - b); // list4 -> [1, 2, 3]

// 13. slice()
const res13 = ['a', 'b', 'c', 'd'].slice(1, 3); // ['b', 'c']

// 14. splice()
const list5 = ['js', 'c++', 'go'];
list5.splice(1, 1, 'python'); // list5 -> ['js', 'python', 'go']