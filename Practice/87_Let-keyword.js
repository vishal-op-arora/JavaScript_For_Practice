/**
 * redecleration of varaible allowed with var keyword 
 */
var y = 1;
console.log(y);
var y = 11;
console.log(y);


/**
 * redecleration of varaible not allowed with let keyword 
 */
let x = 2;
console.log(x);
// let x = 22; //  Cannot redeclare block-scoped variable 'x'.
// console.log(x);


/**
 * define variable with var
 * define varaible with let not allowed
 */
var z = 3
console.log(z);
// let z = 33;
// console.log(z); // Error Identifier 'z' has already been declared


/**
 * define variable with let
 * define varaible with var not allowed
 */
let w = 4
console.log(4);
// var w = 44;
// console.log(4); // Error Identifier 'w' has already been declared

/**
 * var keyword does allowed to access the varaible before initialization
 * But it will be undefined
 * Variable Hoisting
 */
console.log(a);
var a = 5;

c = 6;
console.log(c);
var c ;



/**
 * let keyword does not allowed to access the varaible before initialization
 * i.e. Not Hoisted
 */
//console.log(b); // Cannot access 'b' before initialization
let b = 6; 

// d = 8;
// console.log(d); // Cannot access 'd' before initialization
// let d ;

// d = 8;
// let d ;
// console.log(d); // Cannot access 'd' before initialization


/**
 * let variable have defined scope 
 * var varible can be used outside the scope i.e. Global Scope
 */
// Scope
{
    var e = 10; // Global Scope
    let f = 9; // block Scope
}
console.log(e);
console.log(f);