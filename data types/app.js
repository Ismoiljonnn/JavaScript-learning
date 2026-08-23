// In JavaScript, values are divided into 2 groups: 
//     primitive and object

// Primitive
// A primitive value is stored directly at the address accessed by the variable.

// Number – a data type used to store numbers
let age = 21;
let price = 12;

// String – a data type used to store a sequence of characters
let firstName = "Ismoiljon";

// Boolean – a logical data type that can only accept true or false values
let isUser = true;

// Undefined – a data type for variables that have not been assigned a value yet
let student;

// Null – a data type representing an empty value
let school = null;

// Symbol – a data type that represents a unique and immutable value
let id = Symbol('id');

// BigInt – a data type designed to store large integers
const alsoHuge = BigInt(9007199254740991);

// JavaScript features dynamic typing, allowing values to be stored without
// explicitly specifying the variable's data type. The data type of a variable
// is determined automatically.

// The typeof operator can be used to determine the data type stored in a variable.