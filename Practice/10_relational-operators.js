/**
 * Relatonal Operators evaluate either true or false
 *  >  : Less tahn
 *  <  : Greater than
 *  >= : Greater than or Equal 
 *  <= : Less than or Equal 
 *  != : Not Equal to 
 *  !== : Not double equal
 *  == : Equal Equal to (Type unsafe)
 *  === : triple Equal (type Safe) always use it 
 */

var isBefore = "hello" < "hi";
console.log(isBefore);

var isAfter = "hello" > "hi";
console.log(isAfter);

var isGreater = 10 > 9;
console.log(isGreater);


var x = 12, y = 13;

console.log(x <= y);
console.log(x >= y);
console.log(x == y);
console.log(x != y);

console.log("---------------------------------------");

// == converting both operands to string 
console.log("type unsafe == ", 1 == '1');
console.log("type safe == ", 1 === '1');

// == converting both operands to string 
console.log("type unsafe != ", 1 != '1');
console.log("type safe !== ", 1 !== '1');