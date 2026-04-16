const phrase = process.argv[2];
const shift = Number(process.argv[3]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function encryptChar(char) {
    if (char === ' ') return ' ';
    const index = alphabet.indexOf(char.toLowerCase());
    const newIndex = ((index + shift) % 52) % 26;
    return alphabet[newIndex];
}

if (!phrase || !shift) {
    console.log("Please run: node caesarCipher.js \"your phrase\" shiftNumber");
} else {
    //const result = phrase.split('').map(encryptChar).join('');
    const chars = phrase.split('');
    const encryptedChars = chars.map(encryptChar);
    //const encryptedChars = chars.map((char) => encryptChar(char));
    /*const encryptedChars = chars.map(function (char) {
        return encryptChar(char);
    });*/
    const result = encryptedChars.join('');
    console.log(result);
}