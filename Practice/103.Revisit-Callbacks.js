const sum = (x, y) => {
    return x  + y;
};
console.log(sum(10, 20));

console.log("-----------------------------------------------------------");
const sum2 = (x, y) => {
    setTimeout(() =>{
        return x  + y;
    }, 5000);
    return; //  by default return called result in undefined 
};
console.log(sum2(20, 30));

console.log("-----------------------------------------------------------");
const sum3 = (x, y, cb) => {
    setTimeout(() =>{
        cb(x  + y);
    }, 5000);
    console.log("1 - Jump to here first");
    return "2 - Sum3 return statement"; //  by default return called result in undefined 
};

function printResult(result){
    console.log("4 - printResult executed after 5 sec :  ", result);
}
console.log(sum3(20, 30, printResult));
console.log("3 - Jump out from sum3");

// console.log("-----------------------------------------------------------");

// const add=(a,b)=>{
//     setTimeout(()=>{
//         print(a+b)
//     });
//     return 70
// }

// function print(val){
//     console.log(val)
// }

// console.log(add(5,10));