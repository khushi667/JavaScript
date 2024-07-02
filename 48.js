// short method
//find method
//every method
// some method 
// fill method
// splice method
// ASCII TABLE 
// char: ascii values

// ####### sort method ########

const numbers = [5,9,1200,410,2456];
numbers.sort((a,b)=>{
    return a-b;   // if u want to sort in desecending order tthen write "return b-a"
});
console.log(numbers);

// 1200,420
// a-b-----> 790
// a-b------> positive (greater than 0)--> b ,a
// 420,1200

// a-b---> negative --------> a,b
// 5,9---->-4



// real life example 
// lowToHigh   HighToLow

const products = [
    {
        productId: 1, productName: "p1", price: 300
    },
    {
        productId: 2, productName: "p2", price: 3000
    },
    {
    productId: 3, productName: "p3", price: 200
    },
    {
    productId: 4, productname: "p4", price: 8000
    },
]
const LowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log(LowToHigh);


// ######### find method #########

const myArray = ["Hello", "prachi", "how", "are", "you"];

// function isLenght3(string){
//     return string.length === 3;
// }
const ans = myArray.find((string)=>string.length===3);                      //arroe function
console.log(ans);

// realastic example
const user = [
    {userId: 1, userName: "khushi"},
    {userId: 2, userName: "devanshi"},
    {userId: 3, userName: "aniketa"},
];
const myUser = user.find((user)=>user.userId===3);
console.log(myUser);



// ########## every method ############

const number = [2,4,6,8,10];
const res = number.every((number)=>number%2==0);
console.log(res);

// realtime example

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000}
]
// check every product < 30000

const anss = userCart.every((cartItem)=>cartItem.price <30000);
console.log(anss);


// ######### some method #######

const number1 = [3,5,8,9];  //if this method find any even number it return true else false

const res1 = number1.some((number1)=>number1%2==0);
console.log(res1);

// realtime example

const game = [
    {userId: 1, userName: "khushi", gameplay:"coc", buy:1200},
    {userId: 2, userName: "devanshi", gameplay:"freefire", buy:1500},
    {userId: 3, userName: "aniketa", gameplay:"callOfDuty", buy:1600},
    {userId: 4, userName: "prachi", gameplay:"chess", buy:1000},
]
const res2 = game.some((gameplay)=>gameplay.buy > 1500);
console.log(res2);



// ###### fill method ###########4
// value,  start,  end

const MyArray = new Array(10).fill(0);
console.log(MyArray); 

const MyArray1 = [1,2,3,4,5,6,7,8];
MyArray1.fill(0,2,5);
console.log(MyArray1);





// ########### splice method ##########
// start,  delete,  insert

const myarray = ['item1','item2','item3'];
// delete
const deletedItem = myarray.splice(1, 2);
console.log("delete item", deletedItem);

//insert
myarray.splice(1, 0,'inserted item');
console.log(myarray);



// insert and delete
const delItem = myarray.splice(1,2,"inserted item 1", "inserted item 2");
console.log("deleted item",delItem);
console.log(myarray);

