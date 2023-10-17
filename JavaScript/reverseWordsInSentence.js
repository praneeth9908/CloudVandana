function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => reverseWord(word));

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Use the split(), reverse(), and join() methods to reverse the word
    return word.split('').reverse().join('');
}

const inputSentence = "Hello world! This is a test";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Original Sentence: " + inputSentence);
console.log("Reversed Sentence: " + reversedSentence);
