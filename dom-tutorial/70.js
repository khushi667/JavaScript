const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);  // give all classes that present in todo section

// sectionTodo.classList.add('bg-dark'); // to add bacground color

// sectionTodo.classList.remove('container');

const ans = sectionTodo.classList.contains("container");  // check if class exist or not
console.log(ans);

// sectionTodo.classList.toggle("bg-dark");  // add background color if bg color is exist then toggle will remove bg-color else toggle add bg-color


const header = document.querySelector(".header");
console.log(header.classList);
// header.classList.add("bg-dark");
