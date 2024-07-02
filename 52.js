// clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}
// const obj2 ={...obj};
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);



// optional chaining

const user = {
    firstName: "khushi",
    // address: {houseNumber: '1234'}
}
console.log(user?.firstName);
console.log(user?.address?.houseNumber);