// maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbol
//as key

// in maps you can use anything as key
// like array, number, string

// object literals
// key -> String
//key -> symbol 
// const persons = {
//     firstName: "khushi",
//     age: 19,
//     1:"one"
// }
// for(key in persons){
//     console.log(typeof key);
// }

// console.log(person.firstName);
// console.log(person["firstName"]);

// key value pair
const person = new Map();
person.set('firstName', 'khushi');
person.set('age', 19)
console.log(person);
console.log(person.get('firstName'));
for(let key of person.keys()){
    console.log(key, typeof key);
}

const person1 ={
    id:1,
    firstName:"khushi"
}

const extraInfo = new Map();
extraInfo.set(person1, {age:19, gender:"female"});

console.log(person1.id);
console.log(person1.firstName)
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person1).age);