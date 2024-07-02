// function returning promise

function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetable','salt','rice'];
    return new  Promise((resolve,reject)=>{
        if(bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            reject("Couldn't do it");
        }
        
    })
}
ricePromise().then(
    // jab promise resolve hoga
    (myFriedRice)=>{
    console.log("lets eat", myFriedRice);
}
).catch((error)=>{
    console.log(error)
})



// promise and setTimeout

// i want to resolve and reject promise after 2 seconds

function myPromise(){
    return new Promise((resolve,reject)=>{
        const value = true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000)
        })
}
myPromise()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})