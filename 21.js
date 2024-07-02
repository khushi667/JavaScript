// primitive vs reference data type

// primiive type  -- there values are stored in stack
let num1 = 6;
let num2 = num1;
console.log("Value of num1 and num1 is ", num1);
console.log("Value of num1 and num2 is ", num2);
num1++;
console.log("After incrementing num1 value");
console.log("Value of num1 and num1 is ", num1);
console.log("Value of num1 and num2 is ", num2);


// refence type -- there values are stored in heap and in stack there is a pointer which has the address of the value
// array

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("array1 after pushing item3", array1);
console.log("array1", array1);
console.log("array2", array2);


