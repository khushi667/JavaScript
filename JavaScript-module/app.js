import { firstName } from './utils/fname.js'
import { age } from './utils/age.js'
import  Person, {Person2}  from './utils/person.js'  // {Person2}-- named export

// console.log(firstName, age);

const personInstance = new Person2("John", "Doe", 19);
personInstance.info();
// console.log(personInstance);
