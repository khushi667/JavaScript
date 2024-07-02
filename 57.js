// prototyp

function hello(){
    console.log("hello there...");
}

// javascript function ===> function object

//console.log(hello.name)   //it givers function name 

// you can add your own properties
//hello.MyOwnPrperty = "very unique value";
// console.log(hello.MyOwnproperty);

// name property ---> tells function name

// function provides more usefull properties 

//console.log(hello.prototype);  // {}

// only function provide prototype property

hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return "lallala"
};
console.log(hello.prototype);
// console.log(hello.prototype.sing());