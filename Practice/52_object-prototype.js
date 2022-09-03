
/**
 *  A function has all of them Child Function,Prototype and function call context referred by ‘this’ keyword.
 * 
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
 * In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
 */
var obj = {
    x : 1
};

console.log(Object.getPrototypeOf(obj));

console.log(obj.__proto__);

var proto = {
    y : 2
};


console.log(obj);
console.log(proto);

/**
 * it is like inheritance
 * proto has been inherit by obj
 * obj would have parameter y
 */
Object.setPrototypeOf(obj, proto);
console.log(obj.x, obj.y);
console.log(proto.y);
