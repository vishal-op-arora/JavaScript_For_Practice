function greet(message, name){
    console.log(this);
    console.log(message + ", " + name + "!");
}

/**
 * bind() method can be used to achieve-
 *  - A new function having some specific function call context attached to it,from an existing function.
 *  - Permanently binding a value to an input parameter of the function on which it is called.
 * 
 * bind() method can bind arguments to the calling function and will return a new function having some permanently bonded arguments to the original calling function.
 */
console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

var greetBound = greet.bind("world"); // Context change to String world
greetBound("Good Morning", "Lucy"); // new function with String context created

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

var greetHola = greet.bind("Hola", "Good Morning"); // one argument passed here 
greetHola("Lonika"); // rest of the argument passed here
greetHola("Vishal"); // rest of the argument passed here

console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

var greetHola = greet.bind(null, "Good Morning"); // global context 
greetHola("Lonika"); // rest of the argument passed here