// intro to event
// clickbutton, press,mouseover --> these all are event

// we have three ways to add event 

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me");
// }

// method--> addEventListener
const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you clicked me");
// }
// btn.addEventListener("click", function(){
//     console.log("you clicked me!!!!")
// });

 btn.addEventListener("click", ()=>{
    console.log("hey! why you clicked me");
 });