//Create a program that demonstrates the use of various arithmetic operators (addition, subtraction, multiplication, division) with user input.
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;

console.log(z);

//Create a program that compares two numbers and prints whether they are equal, greater, or less than each other using comparison operators.
//console.log(Boolean(x==5));

//Ternary operator
const number = 4;
const result = number % 2 === 0 ? "Even" : "Odd";
//console.log(number, 'is', result);
//OR
//console.log(`${number} is ${result}`);

//BITWISE Operators

let binary1 = 1101;  //13
let binary2 = 1010;   //10
const decimal1 = parseInt(binary1, 2); // Convert binary to decimal
const decimal2 = parseInt(binary2, 2); // Convert binary to decimal

console.log(`Binary1: ${binary1} (${decimal1})`);
console.log(`Binary2: ${binary2} (${decimal2})`);

const andResult = decimal1 & decimal2; // Bitwise AND 
/*For example, if you perform 5 & 3, it compares the binary 
representations 0101 (5 in binary) and 0011 (3 in binary), 
and the result is 0001, which is 1 in decimal.

5 --> 0101
3 --> 0011
------------
1 --> 0001

TRUTH TABLE - 
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1
*/

const orResult = decimal1 | decimal2;  // Bitwise OR
/* 
This operator compares each bit of two binary numbers and
returns a new binary number where each bit is set to 1 if
at least one of the corresponding bits in the input numbers is 1. 
In other words, it performs a logical OR operation on each pair of bits.
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

 */
const xorResult = decimal1 ^ decimal2; // Bitwise XOR
/* This operator compares each bit of two binary numbers
and returns a new binary number where each bit is set to 1
if the corresponding bits in the input numbers are different
(one is 0 and the other is 1). 
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0
*/

console.log(`Bitwise AND: ${andResult}`);
console.log(`Bitwise OR: ${orResult}`);
console.log(`Bitwise XOR: ${xorResult}`);
