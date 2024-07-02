// console.log("Hello world");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // capturing event
// child.addEventListener("click",()=>{
//     console.log("capture!!! child");
// },true)
// parent.addEventListener("click",()=>{
//     console.log("capture!!! parent");
// },true)
// grandparent.addEventListener("click",()=>{
//     console.log("capture!!! grandparent");
// },true)
// document.body.addEventListener("click",()=>{
//     console.log("capture!!! document.body");
// },true)

// // bubbling
// child.addEventListener("click",()=>{
//     console.log("you clicked on child!!!");
// })
// parent.addEventListener("click",()=>{
//     console.log("you clicked on parent!!!");
// })
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked on grandparent!!!");
// })
// document.body.addEventListener("click",()=>{
//     console.log("you clicked on document.body!!!");
// })


// event delegation 
grandparent.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
});