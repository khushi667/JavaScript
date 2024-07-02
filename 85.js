// synchronous programming vs asynchronous programing

// Synchronous programming is a programming model where operations take place sequentially. 
// synchronous programming and single threaded

// console.log("Script start!!");

// for(let i=0;i<1000;i++){
//     console.log("Inside for loop");
// }
// console.log("Script end");



// setTimeout
console.log("Script start");
const id = setTimeout(()=>{
    console.log("inside setTimeout");
},1000);

for(let i = 1; i< 100; i++){
    console.log("...");
}
console.log("settimeout id is", id);
console.log("clearing time out");
clearTimeout(id);   // clear the id of setTimeout and inside setTimeout will not printed on console
console.log("Srcipt end");
