// param destructuring

// we use param destructuring with object and in react too


const person = {
    firstName: "khushi",
    gender: "female",
    age: 20,
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);