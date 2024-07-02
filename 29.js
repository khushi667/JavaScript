// objects  reference type
// array are good but not sufficient 
// for real world data 
// object store key value pair
// object don't have index
// object are mutable

// how to create object

const person = {
    name: 'khushi',
    age: 20,
    hobbies: ['playing', 'sleeping']
}

console.log(person);

// how to access data from object

console.log(person["name"]); // you can also access data using bracket
console.log(person.age);
console.log(person.hobbies);


// how to add key value pair to objects

person["gender"] = "female"; // you can also add key value pair using bracket
person.gender = "female";
console.log(person);