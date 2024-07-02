// promise.resolve

// const myPromise = Promise.resolve(3);
// Promise.resolve(3).then(value=>{
//     console.log(value);
// })


// promise chaining

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then((value)=>{
        console.log(value);
        value+= "bar";
        return value
    })
    .then((value)=>{
        console.log(value);
        value+= "bazz"
        return value;
    })
    .then((value)=>{
        console.log(value);
        return value;
    })
// then() -- always return promise