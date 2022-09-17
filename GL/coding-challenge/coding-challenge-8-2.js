/**
 * Write a function which accepts only one argument . 
 * But you want to pass a variable number of arguments to this function and 
 * want the function to return the sum of those provided arguments.
 * 
 * Design a function in such a way using the rest operator that it accepts all provided arguments into a single variable and 
 * then add those elements and return their sum.
 */

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    };
    return result;
}

console.log(sum(1));
console.log(sum(1, 2, 3, 4));