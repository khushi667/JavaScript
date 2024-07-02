// event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(event){
//     console.log(event);
// })


// jab kisi bhi element pe event listener add hoga
// js engine -- line by line execute hoga
// browser --- js engine + extra features
// browser ---- js engine + webApi(mini application)
// API(application program interface)
// jab browser ko pta chala ki user ne evenet perforn kra 
// jo ham listen kar rhe the
// browser ---- 2 kam karega
// 1) call back function hao woh js engine ko dega
// 2) callback functin ke sath browser jo evenet hua hai uski inforamtion dega
// ye info hame ek object ke form me milegi



const allButtons = document.querySelectorAll(".my-buttons button");

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget);
    })
}