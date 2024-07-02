// new keyword

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user = new createUser("khushi",19);



// new keyword 
// 1.) create empty object,  this = {}
// 2.) return this

// user1.about();


// now we will see more examples of new keyword 

function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
           return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function(){
             return this.age >=18;
}
const user1 = new CreateUser('khushi', 'mishra','khushi@gmail.com',19 , 'your address');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());


// display all keys 
for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}