let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  let validatedArray = words.filter(validatingArray);

  return validatedArray;
}

function validatingArray(word) {
  return word.length >= 5;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
