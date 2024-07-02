// this keyword

// in arrow function, the value of this is "window" 
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", function(){
         console.log("you clicked me!!!!");
         console.log("value of this");
         console.log(this);
});