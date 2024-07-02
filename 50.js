// sets (it is iterable)
// store data
// sets also have its own method
// no index-based access
// order is not guaranteed
// unique items only (no duplicate allowed)

const numbers = new Set([1,2,3]);
if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
console.log(numbers);


const number = new Set();
number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);
number.add(6);
number.add(7);
for(let num of number){
    console.log(num);
}


const myArray = [1,2,3,3,4,5,7,7];
const uniqueElement =new Set(myArray);
let length = 0;
for(let element of uniqueElement){
    length++;
}
console.log(length);