// callback function 


function myFunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there...!!!");
    callback("khushi");
}
myFunc(myFunc2);