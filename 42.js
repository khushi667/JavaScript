// block scope(let,const) vs function scope(var) 

// let and const are block scope
// var is function scope

{
    let firstName = "khushi";
}
//console.log(firstName);  // you can't access data from outside of the block but you can access data in var case and in let , const

{
    let firstName = "devanshi";
    console.log(firstName);
}

const firstName = "aniketa";
console.log(firstName);

function myApp(){
    if(true){
        let firstName = "khushi";
        console.log(firstName);
    }
    console.log(firstName);  // it will give error --> Uncaught ReferenceError: firstName is not defined
}
myApp();