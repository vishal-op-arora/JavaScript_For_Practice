/*
 * called the variable before decleration
 */


var x;
console.log('x before decleration :: ', x);
x = 1;
console.log('x after decleration :: ', x);


console.log('y before decleration :: ', y); // variable decleration
var y = 2; // value is assigned only here though variable is created earlier
console.log('y after decleration :: ', y);

console.log(z); // This will be an error as Z not defined but in above case it is defined.


console.log('w before decleration :: ', w); // This will be an error as w not defined here as well
w = 3;
console.log('w after decleration :: ', w);