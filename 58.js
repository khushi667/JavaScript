// ######### prototype #########



// const userMethod = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >=18;
//     }
// }
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
           return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function(){
             return this.age >=18;
}
const user1 = createUser('khushi', 'mishra','khushi@gmail.com',19 , 'your address');
console.log(user1);
console.log(user1.about());
console.log(user1.is18());