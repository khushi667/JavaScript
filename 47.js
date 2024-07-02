// important array methods

// forEach
// map
// filter
// reduce



const number = [4,2,5,8];

function myFunc(number,index){
    console.log(`index is ${index} and number is ${number}`);
    // console.log(`${number}*2 = ${number*2}`);
}
// for(let i=0 ; i<number.length; i++){
//     myFunc(number[i], i);
// }

number.forEach(myFunc);  // forEach take callback(function) as a argument


// anonymous function for this task

number.forEach(function(number,index){
    console.log(`index is ${index} and number is ${number}`);
});


number.forEach(function(number){
    console.log(number*2);
});


// realastic example

const users = [
    {firstName: "khushi", age: 20},
    {firstName: "devanshi", age: 20},
    {firstName: "aniketa", age: 20},
]
users.forEach(function(user){
    console.log(user.firstName, user.age);
});

// arrow function for this task 
users.forEach((user, index) => {
    console.log(user.firstName, index);
})







// ########## Map Method ##########

const numbers = [3,4,5,6,7,8];
const square = function(number){
    return number*number;
}
const squareNumber = numbers.map(square);
console.log(squareNumber);



// realastic example

const Users = [
    {firstName: "khushi", age: 20},
    {firstName: "devanshi", age: 20},
    {firstName: "aniketa", age: 20},
]
const userNames = Users.map((user)=>{
    return user.firstName;
});
console.log(userNames);



// ########## filter function ##########

const Numbers = [1,2,3,4,5,6,7,8];

const isEven=function(Number){
    return Number%2==0;
}
const evenNumbers= Numbers.filter(isEven);
console.log(evenNumbers);


// we can define callback function directly here 
const Numbers1 = [1,2,3,4,5,6,7,8];

const oddNumbers= Numbers.filter((number)=>{
    return number%2!==0;
});
console.log(oddNumbers);



// ########## reduce method ##########

const numbers2 = [1,2,3,4,5,10];

// aim: sum of all numbers in array 

const sum = numbers2.reduce((accumulator, currentValue)=>{;
    return accumulator + currentValue;
});
console.log(sum);


// accumulator,  currentvalue,   result 
// 1                 2                3
// 3                 3                6
// 6                 4                10
// 10                5                15
// 15                10               25




const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000}
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return currentProduct.price + totalPrice;
}, 0)
console.log(totalAmount);



// total price         currentValue      return
// 0                      {}                12000
// 12000                  22000             34000
// 34000                  15000             49000