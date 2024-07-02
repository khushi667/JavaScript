// promise -- A Promise is an object representing the eventual completion or failure of an asynchronous operation

const bucket = ['coffee', 'chips', 'vegetable','salt','rice'];

const friedRicePromise = new  Promise((resolve,reject)=>{
    if(bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Couldn't do it");
    }
    
})
// produce


// consume
// how to consume
friedRicePromise.then(
    // jab promise resolve hoga
    (myFriedRice)=>{
    console.log("lets eat", myFriedRice);
}
).catch((error)=>{
    console.log(error)
})