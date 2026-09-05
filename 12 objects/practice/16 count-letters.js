function countLetters(text) {
  const frequency = {};
  for (const char of text) {
    if (char !== " ") {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }
  return frequency;
}

function findMostFrequent(frequency) {
  let mostFrequentChar = "";
  let maxCount = 0;

  for (const char in frequency) {
    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      mostFrequentChar = char;
    }
  }

  return $mostFrequentChar ( times);
}

console.log(countLetters("programming"));
console.log(countLetters("hello world"));
console.log(findMostFrequent(countLetters("hello world")));
