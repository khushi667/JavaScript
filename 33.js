// spread operator

// spread operator in array

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];  // spread operator in array
console.log(array3);

const array4 = [..."khushi"]; //This method spreads every element of a string.
console.log(array4);


// spread operator in object

const obj2 = {
    key1: "value1",
    key2: "value2",
    key1: "value3"  //override the previous value
};
console.log(obj2);


const obj3 = {
    key3: "value3",
    key4: "value4",
};
const newObject = {...obj2, ...obj3, key6: "value6"}; // add new key value
// const newObject = { ...obj3, ...obj2};
console.log(newObject);


// If we don't want to spread the string but instead want to assign an index to every element in the form of key value pair.

const obj5 = { ..."abc"};
console.log(obj5); // {0: 'a', 1: 'b', 2: 'c'}
