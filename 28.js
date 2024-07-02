// array destructuring 

const myArray = ["value1", "value2","value3","value4","value5"];

let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("value of myVar1", myVar1);
console.log("value of myVar2", myVar2);

// there is shortcut in javascript to do this 

let [myvar1, , myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);