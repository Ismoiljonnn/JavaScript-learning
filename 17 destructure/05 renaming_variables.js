// Renaming Variables - assigns extracted object properties to new variable names using a colon.

const person = { id: 121, username: 'stark' };

const { id: userId, username: handle } = person;

console.log(userId); // Output: 121
console.log(handle); // Output: "stark"