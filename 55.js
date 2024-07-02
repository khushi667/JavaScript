// arrow function

// arrows functions, as previously said, do not have their own "this" keyword and instead inherit it from the parent scope, in this case, the global one

const user1 ={
    firstName: "khushi",
    age: 19,
    about: () => {
        console.log(this.firstName, this.age);
    }
} 
user1.about();




// ###### short syntax #####
const user2 ={
    firstName: "khushi",
    age: 19,
    about: function(){
        console.log(this.firstName, this.age);
    }
} 
user2.about();


// we can write an alternate  for above code 

const user3 ={
    firstName: "khushi",
    age: 19,
    about(){
        console.log(this.firstName, this.age);
    }
} 
user3.about();
