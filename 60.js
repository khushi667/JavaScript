//2015   es6


class createUser{
    constructor(firstName,lastName,email,age,address){
    console.log('constructor called');
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
about(){
    return `${this.firstName} is ${this.age} years old`
}
is18(){
    return this.age >= 18;
}
sing(){
    return "la la la la";
}
}
const user = new createUser('khushi','mishra','khus@gmail.com',19,'your address');
console.log(user);
console.log(user.about());
console.log(Object.getPrototypeOf(user));