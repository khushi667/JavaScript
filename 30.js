// difference between dot and bracket notation 

const key = "email";
const person = {
    name: 'khushi',
    age: 20,
    "person hobbies": ['playing', 'sleeping']
}
console.log(person["person hobbies"]);

// person.key = "Xl5yQ@example.com";  // this will return key rather than email
// console.log(person);


person[key] = "Xl5yQ@example.com";
console.log(person);