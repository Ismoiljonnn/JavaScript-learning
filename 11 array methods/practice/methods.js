array.push(6); // add to at the end
array.unshift(0); // add to the at the start
array.pop(); // removing last element
array.shift(); // removing first element
array.reverse(); // reversing the array
array.includes(); // searching a value, returns true or false
array.find((value, index) => {return value === 7;}); // returns value or undefined
array.filter((value, index, array) => {return value % 2 === 1;}); // returns filtered values
array.join("something"); // adds something after each element