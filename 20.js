// array push pop 

// array shift unshift 


// push and pop are fast as compare to unshift and shift
// the reason is that shift and unshift are used to add all element in memory and remove respectively

let fruits = ["apple", "mango", "banana"];
console.log(fruits);

fruits.push("pineapple"); // with the help of push we can add value in array in last index
console.log(fruits);

let poppedFruit = fruits.pop();  // with the help of pop we can remove value in last index and return that value
console.log("popped fruit is ", poppedFruit);
console.log(fruits);



fruits.unshift("bananna"); // with the help of unshift we can add value in first index
console.log(fruits);


let removeFruit = fruits.shift();  // with the help of shift we can remove value in first index
console.log(fruits); 
console.log("removed fruit is ", removeFruit);