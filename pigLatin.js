const input = process.argv[2];
const vowels = ['a', 'e', 'i', 'o', 'u'];

function translateWord(word) {
    // Check if first letter is capital
    const isCapital = word[0] === word[0].toUpperCase();
    
    let translated;
    
    // Rule 3: If word starts with a vowel, add "way" at the end
    if (vowels.includes(word[0].toLowerCase())) {
        translated = word + 'way';
    }
    // Rule 2: If word starts with two consonants, move both to end and add "ay"
    else if (!vowels.includes(word[1].toLowerCase())) {
        translated = word.slice(2) + word.slice(0, 2) + 'ay';
    }
    // Rule 1: If word starts with a consonant and a vowel, move first letter to end and add "ay"
    else {
        translated = word.slice(1) + word[0] + 'ay';
    }
    
    // If first letter was capital, capitalize the translated word
    if (isCapital) {
        return translated[0].toUpperCase() + translated.slice(1).toLowerCase();
    }
    
    return translated.toLowerCase();
}

if (!input) {
    console.log("Please run: node pigLatin.js \"your phrase here\"");
} else {

    //const result = input.split('').map(translateWord).join('');


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