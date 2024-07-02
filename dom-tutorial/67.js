// loop 

// we can't use forEach method to iterate trough HTMLCollection 



// array like object --> indexing length property
// const navItems = document.getElementsByTagName("a");     // HTMLCollection
// console.log(navItems);

// simple loop 

// for(let i=0;i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight  = "bold";
// }

// for of loop 

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight  = "bold";
// }


let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));

// simple for loop 

// for(let i=0;i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight  = "bold";
// }

// for of loop 

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight  = "bold";
// }

// forEach loop 
navItems.forEach((navItem)=>{
    navItem.style.backgroundColor = "fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})
