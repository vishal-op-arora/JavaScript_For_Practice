
/* 
 * JavaScript supports hoisting for both function and variables.
 *
 * called the function before decleration 
 */ 
 

/*
 * Function Decleration Syntax
 * below foo() will pass
 * The below  code will print "foo called" and uses the concept of function hoisting.
 */
foo();
function foo(){
    console.log('foo called');
}

/*
 * Function Expression Syntax 
 * below bar() called will failed
 * not "hosited" - created just-in-time
 */
bar();
var bar = function (){
    console.log('bar called');
};


/* 
 * test is a variable which holds a reference to a function.
 * So before defining the function to which test refers we can’t call that function using test().
 * So the code will throw an error.It is little different from function hoisting.
 */

test();

var test=function(){
    console.log("Test Function called")
};