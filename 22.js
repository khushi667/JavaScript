// how to clone array

// how to concatenate two array 

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
//let array2 = array1.slice(0).concat(["item3", "item4"]);  // add extra item in array2 with concat function

// let array2 = [].concat(array1, ["item3", "item4"]);

// new way 
// spread oprator
// let array2 = [...array1, "item3", "item4"];

let oneMoreArray = ["item5", "item6"];
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);