// how to iterate array

const person = {
    name: 'khushi',
    age: 20,
    "person hobbies": ['playing', 'sleeping']
}

// for object iterate we use two method 1. for in 2. objects.keys

for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : " ,person[key]);
}

console.log(typeof Object.keys(person));

const val = Array.isArray((Object.keys(person)));
console.log(val);


// for of loop 

for(let key of Object.keys(person)){
    console.log(person[key]);
}