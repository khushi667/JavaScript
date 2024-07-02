// inheritence in class

class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <=1;
    }
    isCute(){
        return true;
    }
}
class dog extends Animal{

}
const tommy = new dog("tommy", 3);
console.log(tommy);

const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());


// object and instance both are same 