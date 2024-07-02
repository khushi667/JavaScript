// understand callback
// example 1
function myFunc(callback){
    console.log("Function is doing task 1");
    callback();
}
// function myFunc2(){
//     console.log("Function is doing task 2");
// }
myFunc(()=>{
    console.log("Function is doing task 2");
});


// example 2
function getTwoNumbersAndAdd(number1,number2,onSuccess,onFailure){
    if(typeof number1 === "number" && typeof number2 === "number"){
        onSuccess(number1,number2);
    }
    else{
        onFailure();
    }
}

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }
getTwoNumbersAndAdd(4,5, (num1,num2)=>{
    console.log(num1+num2);
}, ()=>{
    console.log("wrong data type");
    console.log("Please pass numbers only");
});