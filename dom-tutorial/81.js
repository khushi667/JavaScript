// keypress event

// const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })


// mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover even ocurred!!!");
});

mainButton.addEventListener("mouseleave",()=>{
    console.log("mouseleave even ocurred!!!");
});