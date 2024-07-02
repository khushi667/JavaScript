// arrow function 

// function expression
const singHappyBirthday = function(){
    console.log("Happy birthday to you.....");
}

// arrow function
const singHappyBirthday2 = () => {
    console.log("Happy birthday to you.....");
}
singHappyBirthday();

// function expression
const sum = function(num1,num2,num3){
    return num1+num2+num3;
}
const result = sum(2,3,4);

// arrow function 
const sum1 = (num1,num2,num3) =>
{
    return num1+num2+num3;
}
const ans = sum(1,2,3)
console.log(ans);



// function expression 
function isEven(num){
    if(num%2==0){
        return true;
    }
    return false;
}

// arrow function
const isOddEven = (num) =>{
    return num % 2== 0;
}
const result1 = isOddEven(3);
console.log(result1);


// shortest way of writing an arrow function 

const isOddEven1 = num => num % 2 == 0;
console.log(isOddEven1(2));