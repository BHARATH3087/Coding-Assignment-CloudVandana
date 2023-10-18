// Function to reverse every word in a sentence
function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and join them back into a sentence
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words to form the final reversed sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Function to sort an array in descending order
function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence:", reversedSentence);

const inputArray = [5, 2, 8, 1, 9];
const sortedArray = sortDescending(inputArray);
console.log("Sorted Array in Descending Order:", sortedArray);
