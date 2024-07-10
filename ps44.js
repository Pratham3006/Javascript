function replaceNextCharacter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'a' && char < 'z') {
            result += String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char === 'z') {
            result += 'a';
        } else if (char >= 'A' && char < 'Z') {
            result += String.fromCharCode(char.charCodeAt(0) + 1);
        } else if (char === 'Z') {
            result += 'A';
        } else {
            result += char; // Handle non-alphabetic characters
        }
    }
    return result;
}

// Example usage:
const input = "Hello, World!";
const replacedString = replaceNextCharacter(input);

console.log(replacedString); // Outputs: "Ifmmp, Xpsme!"
