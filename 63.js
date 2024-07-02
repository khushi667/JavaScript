// getter and setter 

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const[firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;

    }
    setName(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("khushi","mishra",19);
// console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("prachi","mishra");
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "prachi mishra";
console.log(person1);