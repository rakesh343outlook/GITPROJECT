const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

fruits.pop();
console.log(fruits);

fruits.push("Kiwi");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

fruits[fruits.length] = "Strawberry";
console.log(fruits);

const sorted = fruits.sort();
console.log('Sorted',sorted);

fruits.splice(2, 0, "Lemon", "Raspberry");
console.log(fruits);

const citrus = fruits.slice(3);
console.log(citrus);

delete fruits[0];
console.log(fruits);
//Using delete leaves undefined holes in the array. Use pop() or shift() instead.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

//Merging more than two arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

//FOREACH ITERATOR on ARRAY
/* JavaScript provides several methods for iterating over arrays, and one of them is the forEach() method. 
The forEach() method is used to execute a provided function once for each element in an array, in order. 
It does not create a new array; instead, it allows you to perform an action on each element of the existing array. */

const colors = ["red", "green", "blue"];

colors.forEach(function(color) {
  console.log(color);
});

/*
Key points about forEach():

It takes a callback function as an argument.
The callback function is executed once for each element in the array.
It passes each element as an argument to the callback function.
The order of iteration is from the first element to the last.
It does not create a new array or modify the existing array; it is used for side effects (e.g., logging, updating external variables).
*/
//arrow functions
colors.forEach(color => console.log(color));
