const input = process.argv[2];
const vowels = ['a', 'e', 'i', 'o', 'u'];

function translateWord(word) {
    // Rule 3: If word starts with a vowel, add "way" at the end
    if (vowels.includes(word[0].toLowerCase())) {
        return word + 'way';
    }
    // Rule 2: If word starts with two consonants, move both to end and add "ay"
    if (!vowels.includes(word[1].toLowerCase())) {
        return word.slice(2) + word.slice(0, 2) + 'ay';
    }
    // Rule 1: If word starts with a consonant and a vowel, move first letter to end and add "ay"
    return word.slice(1) + word[0] + 'ay';
}

if (!input) {
    console.log("Please run: node pigLatin.js \"your phrase here\"");
} else {
    // Split the input string into an array of words
    const words = input.split(' ');

    // Translate each word to Pig Latin
    const translatedWords = words.map(translateWord);
    // const translatedWords = words.map((word) => translateWord(word));
    /* const translatedWords = words.map(function (word) {
        return translateWord(word);
    });*/
    
    // Join the translated words back into a string
    const result = translatedWords.join(' ');
    console.log(result);
}