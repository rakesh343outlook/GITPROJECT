//A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).
/*With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.*/

// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
    console.log(p1 * p2);
}

myFunction(2,3);


//return method
// Function is called, the return value will end up in x
let x = myFunc(4, 3);
console.log(x);
function myFunc(a, b) {
// Function returns the product of a and b
  return a * b;
}
/* 
Scope:

var: Variables declared with var are function-scoped, which means they are only
accessible within the function in which they are declared. If declared outside of any function,
they become global variables accessible throughout the entire program.

let: Variables declared with let are block-scoped, which means they are only accessible within
the nearest enclosing block (e.g., inside a loop, conditional statement, or function). They do not become global variables.
*/

// code here can NOT use carName
//console.log(carName);
function LocalScopeFunc() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName

/*Hoisting - Hoisting in JavaScript refers to the behavior 
where variable and function declarations are moved to the 
top of their containing scope during the compilation phase, 
even before the code is executed. However, only the declarations
themselves are hoisted, not their initializations (assignments). */

/*
Hoisting:
var: Variables declared with var are hoisted to the top of their containing function 
or global scope during the compilation phase. This means you can use var variables 
before they are declared, and they will be initialized with the value undefined.

let: Variables declared with let are also hoisted but are not initialized. 
If you try to use a let variable before declaring it, you'll get a ReferenceError.
*/
function demonstrateHoisting() {
    // Attempt to use a variable before declaring it
    /*Inside the demonstrateHoisting function, we first
    attempt to log the value of hoistedVar before declaring it.
    This would typically result in a ReferenceError, but due to
    hoisting, it doesn't. Instead, it logs undefined.*/

    console.log(hoistedVar); // Output: undefined
  
    // Declare the variable after using it
    var hoistedVar = "I am hoisted!";
  
    // Now, access the variable
    console.log(hoistedVar); // Output: "I am hoisted!"
  }
  
  // Call the function
  demonstrateHoisting();


//Using call() and apply() to Invoke Functions: These methods allow you to invoke a function with a specific context and arguments.
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.firstName}.`);
}

const person = {
  firstName: "John",
};

// Using call()
greet.call(person, "Alice"); // Output: Hello, Alice! My name is John.

// Using apply() with an array of arguments
const args = ["Bob"];
greet.apply(person, args); // Output: Hello, Bob! My name is John.

//------------
//Using toString() to Convert a Function to a String:The toString() method converts a function to its source code as a string.
function add(a, b) {
  return a + b;
}

const addFunctionString = add.toString();
console.log(addFunctionString); // Output: "function add(a, b) { return a + b; }"

//--------
//Using bind() to Create a New Function with a Bound Context:The bind() method returns a new function with a specified context,
// which can be useful for creating functions with fixed parameters or context.

function greet(greeting, name) {
  console.log(`${greeting}, ${name}! My name is ${this.firstName}.`);
}

const person = {
  firstName: "John",
};

// Create a new function with a bound context and fixed parameter
const greetJohn = greet.bind(person, "Hello");
greetJohn("Alice"); // Output: Hello, Alice! My name is John.

//-----------
/*
--------------Function Objects------------------------------------------------------------------------------------------------------------------------------------

In JavaScript, functions are themselves objects. They can be assigned to variables, passed as arguments to other functions, and returned from functions.

Function objects have properties and methods. 
For example, they have a name property, which is the name of the function, and a length property, which indicates the number of parameters the function expects.

Functions can also have properties and methods defined on them or their prototypes.

--------Constructor Functions------------------------------------------------------------------------------------------------------------------------------------

A constructor function is a regular JavaScript function that is used to create and initialize objects. 

It serves as a blueprint for creating objects of a specific type.

By convention, constructor functions are named with an initial uppercase letter to distinguish them from regular functions.

Inside a constructor function, you typically use the this keyword to refer to the object being created, and you assign properties and methods to it.

You create instances of objects by using the new keyword with the constructor function.
*/

// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create instances of Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1); // Person { name: 'Alice', age: 30 }
console.log(person2); // Person { name: 'Bob', age: 25 }


  
