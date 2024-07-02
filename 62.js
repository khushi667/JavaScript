// super

// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <=1;
//     }
//     isCute(){
//         return true;
//     }
// }
// class dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed = speed;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// }
// const tommy = new dog("tommy",3,45);
// console.log(tommy.run());


// ######## same method in base class ####### 
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
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    run(){
        return `modified Run: ${this.name} is running at ${this.speed}kmph`
    }
}
const tomy = new dog("tomy",3,45);
console.log(tomy.run());