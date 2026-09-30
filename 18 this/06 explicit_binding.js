// Explicit Binding: call(), apply(), and bind()
// Explicitly setting the value of 'this'.

function introduce(lang1, lang2) {
  console.log(`${this.name} knows ${lang1} and ${lang2}`);
}

const dev = { name: 'Ismoil' };

// call: passes arguments individually
introduce.call(dev, 'JS', 'Python');

// apply: passes arguments as an array
introduce.apply(dev, ['JS', 'Python']);

// bind: returns a new function with bound 'this'
const boundFunc = introduce.bind(dev, 'JS', 'Python');
boundFunc();
