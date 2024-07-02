// function declaration
// dry- don't repeat yourself


// console.log("Happy birthday to you.....");
// function declaration
function singHappyBirthday(){
    console.log("Happy birthday to you.....");
}
singHappyBirthday();


// function expression
const singHappyBirthday2 = function(){
    console.log("Happy birthday to you.....");
}
singHappyBirthday2();

// sum of two numbers 
function sum(num1,num2){
    return num1+num2;
}
// console.log(sum());
const returnedValue = sum(3,4);
console.log(returnedValue);

// function declaration
// sum of three numbers 
function sum(num1,num2,num3){
    return num1+num2+num3;
}
const returnValue = sum(4,4,4);
console.log(returnValue);

// function expression
const sum2 = function(num1,num2,num3){
    return num1+num2+num3;
}
const result = sum2(2,3,4);
console.log(result);

// Write a function that takes three numbers as input and returns the sum of those three numbers

// function declaration
function isEven(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(2));

// function expression 
const isEven2 = function(num){
    return num % 2 == 0;
}
console.log(isEven(2));

// shortcut expression 
function isEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}
console.log(isEven(2));

// shortcut expression 
function isEven(num){
    return num % 2 == 0;
}
console.log(isEven(2));


// Write a function that takes string as input and returns first character of that string

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("hello"));


// Write a function that takes array and target as input and returns the index of the target present in the array

function findTarget(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,2,3,4,5,6];
const ans = findTarget(myArray,3);
console.log(ans);