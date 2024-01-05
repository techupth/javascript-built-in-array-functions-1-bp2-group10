let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
 let count = 0;

  for (let i =0; i < words.length; i++) {

    let countString = words[i].length;
    if (countString < countString + 1) {
      count ++;
      if (count === words.length) {
        return count;
      }
    }
  }
}

const result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
