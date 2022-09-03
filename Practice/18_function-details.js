/**
 * - foo called irrespect of arguments
 *  
 */

function foo(str){
    console.log(str +" foo was called");
}

foo();
foo("Hello");
foo("Hello !!!", "World");