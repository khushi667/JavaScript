// while loop in array 

const fruits = ["apple", "mango", "banana"];
let fruits2 = [];
let i=0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}
console.log(fruits2);