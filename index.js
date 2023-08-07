// Given sentence
var sentence = "The quick brown fox jumps over the lazy dog.";

// Initializing counters
var length = 0;
var wordCount = 0;
var vowelCount = 0;

// Loop through each character in the sentence
for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    
    // Counting characters
    length++;
    
    // Counting vowels (considering both upper and lower case)
    if ('aeiouAEIOU'.indexOf(char) !== -1) {
        vowelCount++;
    }
    
    // Counting words (assuming words are separated by spaces)
    if (char === ' ') {
        wordCount++;
    }
}

// Adding 1 to wordCount to account for the last word
wordCount++;

// Displaying the results
console.log("Length of sentence:", length);
console.log("Number of words:", wordCount);
console.log("Number of vowels:", vowelCount);
