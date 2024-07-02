// elem.insertAdjacentHTML(where, html)
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Tach student</li>");

// ######### CLONE NODES ##############

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);


// ####### SOME OLD METHODS TO SUPPORT POOR IE ########
// insertBefore

// // appendchild

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const referenceNode = document.querySelector("first-todo");
// li.textContent = "newTodo";
// ul.appendChild(li, referenceNode);

// replaceChild
// const ul = document.querySelector(".todo-list");

// // new element
// const li = document.createElement("li");
// li.textContent = "newTodo";

// const referenceNode = document.querySelector(".first-todo");
// ul.replaceChild(li, referenceNode);

// removeChilld
const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new Todo";

const referenceNode = document.querySelector(".first-todo");
ul.removeChild(referenceNode);

