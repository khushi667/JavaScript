// default parameters

function addTwo(a,b){
    if(typeof b==="undefined"){
        b = 0;
    }
    return a+b;
}
const ans = addTwo(4);
console.log(ans);



function add(a,b=0){  // b=0--> default parameter
    return a+b;
}
const res = add(4);
console.log(res);