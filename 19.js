// intro to array 
// Arrays are ordered lists of values. They can hold any type of value (including other arrays).

// Arrays are reference types, which means that when we assign one array to another variable, we are not creating a copy of the array, but rather creating a new reference to the same array.

// how to create array 

// let fruits = ["apple", "mango", "banana"];
// let numbers = [1,2,3,4,5];
// let mixed = [1,2,3,4, "string", null, undefined];
// console.log(fruits);
// console.log(numbers);
// console.log(mixed);


let fruits = ["apple", "mango", "banana"];
let obj = {}; // object literal
console.log(Array.isArray(obj));

// console.log(fruits);
// fruits[1] = "grapes";
// console.log(fruits);

console.log(typeof fruits); // checking data type

console.log(Array.isArray(fruits));   //check that fruits are array or not 

// array indexing 
