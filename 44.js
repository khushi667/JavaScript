// rest parameters

function myFunc(a,b,...c){     // ...c is a rest parameter
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9);




function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5);
console.log(ans);