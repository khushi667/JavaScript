//#### add new HTML element to page  #####


// #### innerHTML to add html element #####

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>new todo</li>";

// todoList.innerHTML += "<li>new todo</li>"

// #### when you should use it,when you should not ##



// #### to add new element ####

// document.createElement()
// append 
// prepend

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach students");
// newTodoItem.textContent = "Teach student";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);  // there is also a "prepend" which append item on top
// console.log(newTodoItem);


// remove
// const newTodoItem = document.querySelector('.todo-list li');
// newTodoItem.remove();
// console.log(newTodoItem);


// before

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach student";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);  

// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach student";
const todoList = document.querySelector(".todo-list");
todoList.after(newTodoItem);  
