// 1. Implement a JavaScript program if the user is eligible to vote using if-else statements.


const age = 'A';

// Check if the user's age is greater than or equal to 18
if (isNaN(age)) {
  console.log("Invalid input. Please enter a valid number for your age.");
} else if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote yet.");
}

// 2. Create a switch-case statement that takes a day of the week as input and tells you whether it's a weekday or weekend.

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log("Weekend");
      break;
    case 1:
      day = "Monday";
      console.log("Weekday");
      break;
    case 2:
       day = "Tuesday";
       console.log("Weekday");
      break;
    case 3:
      day = "Wednesday";
      console.log("Weekday");
      break;
    case 4:
      day = "Thursday";
      console.log("Weekday");
      break;
    case 5:
      day = "Friday";
      console.log("Weekday");
      break;
    case 6:
      day = "Saturday";
      console.log("Weekend");
  }

// 3. Write a program that prints the numbers from 1 to 10 using a while loop, a do-while and a for loop.
let i =1;
while (i <= 10) {
    console.log("I= ", i);
    i++;
}

//do-while
let j = 1;
//let j =11;
do {
    console.log("J = ", j,);
    j++;
  } while (j <= 10);
console.log("\n");

//for loop
let cars = ['Saab','Volvo','BMW'];
for (let i = 0; i < cars.length; i++) {
    console.log(i+1, cars[i]);
}

//for ... in
const person = {fname:"John", lname:"Doe", age:25}; //Object array

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text,"\n");
console.log('Accessing property of object by its name',person.fname);

//for of - It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists etc

for (let y of cars) {
  console.log(y);
}
