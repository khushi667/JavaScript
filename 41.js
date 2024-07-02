// lexical scope

const myVar = "value1";   // lexical enviroment
function myApp(){
    

    function myFunc(){    // function declaration
        // const myVar = "value67";
        const myFunc2 = () => {   // function expression
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }      

    console.log(myVar);
    myFunc();
}
myApp();