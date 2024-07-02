// methods---> function inside object

const person ={
    firstName: "khushi",
    age: 19,
    about: function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
} 
person.about();


// Another example 

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 ={
    firstName: "khushi",
    age: 19,
    about: personInfo
} 
const person2 ={
    firstName: "prachi",
    age: 17,
    about: personInfo
}
const person3 ={
    firstName: "devanshi",
    age: 19,
    about: personInfo
}
const person4 ={
    firstName: "anieta",
    age: 19,
    about: personInfo
}
person1.about();
person2.about();
person3.about();
person4.about();