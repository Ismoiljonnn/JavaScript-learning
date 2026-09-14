array.push(6); // add to at the end
array.unshift(0); // add to the at the start
array.pop(); // removing last element
array.shift(); // removing first element
array.reverse(); // reversing the array
array.includes(); // searching a value, returns true or false
array.find((value, index) => {return value === 7;}); // returns value or undefined
array.filter((value, index, array) => {return value % 2 === 1;}); // returns filtered values
array.join("something"); // adds something after each element
array.sort((a, b) => {a + b}); // sorts the array with given function
array.findIndex((value) => value === 5); // return index of array element
array.slice(0, 5); // slices some part
array.splice(0, 4); // deletes some part
array.reduce((prevValue, value, index) => {}, 0) // reduces array into a single value