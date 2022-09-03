var obj1 = {
    x : 1
};

var obj2 = {
    y : 2
};

var obj3 = {
    z : 3
};

var obj4 = {
    w : 4
};

/**
 * obj1 -> obj2 -> obj3
 * obj4 -> obj3
 */

Object.setPrototypeOf(obj2, obj1);
Object.setPrototypeOf(obj3, obj2);
Object.setPrototypeOf(obj4, obj2); // Two objects obj3 and obj4 are sharing the same prototype obj2

console.log(obj1.x);
console.log(obj2.x, obj2.y);
console.log(obj3.x, obj3.y, obj3.z);
console.log(obj4.x, obj4.y, obj4.w);

console.log("---------------------------------------------------------------------------");
obj1.x = 8;
console.log(obj1.x);
console.log(obj2.x, obj2.y);
console.log(obj3.x, obj3.y, obj3.z);
console.log(obj4.x, obj4.y, obj4.w);

console.log("---------------------------------------------------------------------------");
obj2.x = 9;
console.log(obj1.x);
console.log(obj2.x, obj2.y);
console.log(obj3.x, obj3.y, obj3.z);
console.log(obj4.x, obj4.y, obj4.w);

/**
 * We can access the prototype object of a function or object using both of the above syntaxes.
 * - Object.getPrototypeOf()
 * - obj.__proto__
 */