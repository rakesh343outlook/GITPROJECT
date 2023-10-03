//1. Create a JavaScript program that defines variables for a person's name, age, and hometown. Print these variables to the console.


var name = 'Joy';
//console.log(name);
/*The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.*/

let age = '20';
const hometown = 'London'; // this is a constant value

hometown = 'Agra';

//console.log (hometown);
//age = 25;
//console.log (age);

// 2. Declare a constant variable for the value of π (pi) and calculate the area of a circle using this constant.
const pi = 3.14;
let r = 10;
let area = pi* r * r;
//console.log(area);

let area_with_pow = pi * Math.pow(r,2);
//console.log(area_with_pow);

// 3.Create variables of different primitive types (number, string, boolean) and demonstrate dynamic typing by changing their values.
//Number
let a = 3;
let b = 4.5;

//String
let petname = 'Dollar';
let str1 = "Dollar's House";
let str2 = 'Venice is "Beautiful"';

console.log(petname,str1,str2); //You can use quotes inside a string, as long as they don't match the quotes surrounding the string

//Boolean
let x = true;
let y = new Boolean(true);
//console.log(x,y);

//Comparisons using equality operators
/*The main difference between the == and === operator in javascript is that 
the == operator does the type conversion of the operands before comparison, 
whereas the === operator compares the values as well as the data types of the operands.*/

console.log(x==y);
console.log(x===y); //Comparing two JavaScript objects always return false. 
//There is no direct method in javascript to check whether two objects have the same data or not.

// 4. Create an object representing a car with properties like make, model, and year. Print these properties to the console.
// Create an object representing a car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};
  
// Print car properties to the console
console.log("Make:", car.make);
console.log("Model:", car.model);
console.log("Year:", car.year);

//5. Create an array of your favorite tools/cars and print them one by one.
const tools = ["Selenium", "Cypress", "Playwright"];
console.log(tools[0]);
console.log(tools[1]);
console.log(tools[2]);
//OR
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

//Accessing array elements
console.log("First element in array is =",cars[0]);









  







