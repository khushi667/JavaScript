const rootNode = document.getRootNode();
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes); NodeList(3) [head, text, body]

// child realtionship
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(bodyElementNode);

// parent realtionship
console.log(headElementNode.parentNode);

// sibling reltionship 
console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling);

console.log(headElementNode.childNodes);



const h1 = document.querySelector("h1");
const body = h1.parentNode.parentNode;
body.style.color = "#efefef";
body.style.backgroundColor = "333";

// some shortcut
// const body = document.body;


const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);


// if we want only head and body as a childNode

const container = document.querySelector(".container");
console.log(container.children);