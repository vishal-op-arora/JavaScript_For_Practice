/**
 * Every function in JS object 
 * That why we can pass function as argument to the function.
 * Function are kind of objects,so those can be used as a return value for another functions.
 */
function greet(message, name){
    console.log(this);
    console.log(message + ", " + name + "!");
}

greet("Good Morning", "John");


/**
 * instanceof can be used to check whether a given function is an instance of Object class. 
 * Ex- if test() is a function then ‘test instanceof Object’ will return true.Which means test function is also an object.
 */
console.log(greet instanceof Object);

greet.x = 100;
console.log(greet.x);

greet.foo = function(){
    console.log("greet.foo called");
};

greet.foo();

console.log(greet.foo instanceof Object);