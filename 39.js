// hoisting 

hello1();
function hello1(){
    console.log("hello world....!!!");
}

//hello1();
//const hello1 = function(){
 //  console.log("hello");   // this function give error ---> Uncaught ReferenceError: Cannot access 'hello1' before initialization
//}

console.log(hello);
let hello = "hello world....!!!";
console.log(hello);