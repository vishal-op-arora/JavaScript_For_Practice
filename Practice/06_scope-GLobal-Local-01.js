/**
 * Global Scope
 * As variable defined globally hence can be access with-in a function
 */
var global_x = 1;

console.log("outside function, global_x = ", global_x);

function foo(){
    console.log("inside foo, global_x = ", global_x);
}

foo();
