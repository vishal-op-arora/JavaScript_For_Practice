function greet(message, name){
    console.log(this);
    console.log(message + ", " + name + "!");
}

//greet("Good Morning", "John");

/**
 * 
 * - call() and apply() is used to change the function call context of a function
 * - apply() function can take a number of arguments required by the calling function as an array.
 * That array of arguments will supply the required arguments to the calling function.
 * 
 */

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
greet.call("Hello", "Good Morning", "Meyry"); // Context is string 

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
greet.call(null, "Good Morning", "Meyry"); // Context changed to global

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
var args = ["Good Morning", "Lucy"];
greet.apply("hello", args); // Context is string

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");
greet.apply(null, args); // Context changed to global