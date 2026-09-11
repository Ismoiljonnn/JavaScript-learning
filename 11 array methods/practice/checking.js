const firstArray = [1, 2, 3, 4, 5];

let checking = firstArray.map((value, index, array) => {
  if (value % 2 == 0) {
    return true
  } else {
    return false
  }
});