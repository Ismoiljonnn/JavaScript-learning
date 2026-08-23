// pop() method – Removes the last element from 
// an array and returns the removed element.

let languages = ['js', 'java', 'go', 'swift'];

const deletedLanguage = languages.pop();
console.log(languages); // ['js', 'java', 'go']
console.log(deletedLanguage); // swift

// shift() method – Removes the first element from
// an array and returns the removed element.

let languages2 = ['js', 'java', 'go', 'swift'];

const deletedLanguage2 = languages2.shift();
console.log(languages2); // ['java', 'go', 'swift']
console.log(deletedLanguage2); // js