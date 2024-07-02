// DOM -- document object model


// #### select element using get element by id ####  

// const mainHeading = document.getElementById("main-heading");   // it will return object
// console.log(mainHeading);




// ### selecet element using query selector ### 

// const mainHeading = document.querySelector("#main-heading");   
// console.log(mainHeading);

// const header = document.querySelector(".header");
// console.log(header);

// const navItem = document.querySelector(".nav-item");
// console.log(navItem);



// ###### change text ########
// textContent and innerText


const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
mainHeading.textContent = "shikita ga nai";
console.log(mainHeading.textContent);



// ####### change the style of elements #####

const mainmainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "10px solid green";




// #### get and set attribute #####

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://codeprog.com");
console.log(link.getAttribute("href"));


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


// ###### get multiple element using getElement by class name 

// const navItems = document.getElementsByClassName("nav-item");     // HTMLCollection
// console.log(navItems);


// ### get multiple element items using querySelectorAll

const navItems = document.querySelectorAll(".nav-item");     // node list
console.log(navItems[1]);