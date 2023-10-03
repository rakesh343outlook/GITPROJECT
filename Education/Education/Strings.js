// Introduction to strings
console.log("=== Basics of JavaScript Strings ===");

// Creating strings
const singleQuotes = 'This is a string with single quotes.';
const doubleQuotes = "This is a string with double quotes.";
const backticks = `This is a string with backticks.`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

// String length
const exampleString = "Hello, World!";
const stringLength = exampleString.length;
console.log(`String length: ${stringLength}`);

// Accessing characters in a string
const firstCharacter = exampleString[0];
console.log(`First character: ${firstCharacter}`);

const lastCharacter = exampleString[exampleString.length - 1];
console.log(`Last character: ${lastCharacter}`);

// String concatenation
const fName = "John";
const lName = "Doe";
const fullNam = fName + " " + lName;
console.log(`Full name: ${fullNam}`);

// String interpolation (using template literals)
const age = 30;
const introduction = `My name is ${fName} ${lName}, and I am ${age} years old.`;
console.log(introduction);

// String methods
console.log("=== Common String Methods ===");

// Convert to uppercase
const uppercaseString = exampleString.toUpperCase();
console.log(`Uppercase: ${uppercaseString}`);

// Convert to lowercase
const lowercaseString = exampleString.toLowerCase();
console.log(`Lowercase: ${lowercaseString}`);

// Find a substring
const searchTerm = "World";
const isSubstringFound = exampleString.includes(searchTerm);
console.log(`Substring "${searchTerm}" found: ${isSubstringFound}`);

// Replace a substring
const replacedString = exampleString.replace("World", "Universe");
console.log(`Replaced string: ${replacedString}`);

// Split a string into an array
const fruits = "apple,banana,cherry";
const fruitArray = fruits.split(",");
console.log("Fruit Array:", fruitArray);

// Trim whitespace
const stringWithWhitespace = "   Trim me!   ";
const trimmedString = stringWithWhitespace.trim();
console.log(`Trimmed: "${trimmedString}"`);

// Comparing strings
const string1 = "abc";
const string2 = "ABC";
const areEqual = string1 === string2;
console.log(`String comparison: ${areEqual}`);

// String template for practice
const language = "JavaScript";
const practiceString = `
  I am learning ${language}.
  It's fun to work with strings in ${language}.
`;
console.log(practiceString);

// Using charAt() to access characters by index
const exampleString1 = "Hello, World!";
const thirdCharacter = exampleString1.charAt(2);
console.log(`Character at index 2: ${thirdCharacter}`);

// Using charCodeAt() to get the Unicode value of a character
const unicodeValue = exampleString1.charCodeAt(0);
console.log(`Unicode value of the first character: ${unicodeValue}`);

// Using concat() to concatenate strings
const firstName = "John";
const lastName = "Doe";
const fullName = firstName.concat(" ", lastName);
console.log(`Full name (concatenated): ${fullName}`);

// Using indexOf() to find the index of a substring (case-sensitive)
const pattern = "World";
const indexOfSubstring = exampleString1.indexOf(pattern);
console.log(`Index of "${pattern}": ${indexOfSubstring}`);

// Using lastIndexOf() to find the last index of a substring (case-sensitive)
const lastIndexOfSubstring = exampleString.lastIndexOf(pattern);
console.log(`Last index of "${pattern}": ${lastIndexOfSubstring}`);
