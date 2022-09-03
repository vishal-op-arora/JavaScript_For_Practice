/**
 * Local scope
 * local_foo_x defined within the function hence can be acess with-in function only not ouside the function
 * 
 */

function foo(){
    var local_foo_x = 2;
    console.log("inside foo, local_foo_x = ", local_foo_x);
}

foo();
console.log("outside function, local_foo_x = ", local_foo_x); // Error --> ReferenceError: local_foo_x is not defined