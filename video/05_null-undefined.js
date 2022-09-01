/**
 * don't give value than it is undefined
 */

var x;
console.log(x); // undefined

var y = null;
console.log(y); // null
console.log(typeof y);  // object

/**
 * 
 */
var o;
var obj = {
    o : 1
};

console.log(obj.o);

obj = null;
console.log(obj.o);
