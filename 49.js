// iterable
// jispe ham for of loop use kar sake
// string, array are iterable

const firstName = "khushi";
for(let char of firstName){
    console.log(char);
}

const items = ['item1','item2','item3'];
for(let item of items){
    console.log(item);
}

// const users = {'key1': 'value1', 'key2': 'value2'}
// for(let item of users){
//     console.log(item);  // object is not iterable
// }


// array like object
// jinke pas length property hoti hai
// aur jisko ham index se access kar sakte hai
// example:- string

const firstName1 = "khushi";
console.log(firstName1.length);
console.log(firstName1[2]);