const firstArray = [1, 2, 3, 4, 5];


let doubled = firstArray.map((value, index, array) => {
  return value * 2;
});

console.log(doubled);