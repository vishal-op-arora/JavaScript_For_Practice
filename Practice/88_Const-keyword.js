/**
 * Const variable is almost similar to let variables 
 * except two properties,
 *  one const should be assigned a value at the time of declaration and 
 *  it can’t be reinitialized again-
 */


/**
 * const varailbe required initialization
 * Defining a const variable also requires assignment of a value to it at the time of declaration, else it will throw an error.
 */
// const x;
// console.log(x); // Missing initializer in const declaration

/**
 * y is immutable
 */
const y = 2;
console.log(y);
// y = 3; //TypeError: Assignment to constant variable.
// console.log(y);


/**
 * varaibel of const objectcan be change
 */
const obj = {
    z : 4
}
obj.z++;
console.log(obj.z);


// // TypeError: Assignment to constant variable.
// obj = {
//     z : 6
// }
// console.log(obj);
