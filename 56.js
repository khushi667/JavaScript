// 1.function (that function create object)
// 2.add key value pair 
// 3.return object 

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >=18;
    }
    return user;
    }
const user1 = createUser('khushi', 'mishra','khushi@gmail.com',18 , 'your address');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);


// In the above code, there are some mistakes. We have declared two methods(about and is18), and whenever we create an object, the methods are repeatedly called. Because of this, we might face memory problems

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >=18;
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user2 = createUser('khushi', 'mishra','khushi@gmail.com',19 , 'your address');
console.log(user2.about());
const user3 = createUser('prachi', 'mishra','prachi@gmail.com',17, 'your address');
console.log(user3.about());


// here the more currect version of this code with the help of __proto__

const userMethod = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >=18;
    }
}
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethod);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
const user4 = createUser('khushi', 'mishra','khushi@gmail.com',19 , 'your address');
console.log(user4.about());
