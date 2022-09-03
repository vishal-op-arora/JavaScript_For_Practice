var global_x = 1;

console.log("outside function, global_x = ", global_x);

function foo(){
    var local_foo_x = 2;
    console.log("inside foo, global_x = ", global_x);
    console.log("inside foo, local_foo_x = ", local_foo_x);

    function bar(){
        var local_bar_x = 3;
        console.log("inside bar, global_x = ", global_x);
        console.log("inside bar, local_foo_x = ", local_foo_x);
        console.log("inside bar, local_bar_x = ", local_bar_x);
    }
    bar();
    console.log("inside foo, local_bar_x = ", local_bar_x);
}

foo();
//console.log("outside function, local_foo_x = ", local_foo_x); // Error --> ReferenceError: local_foo_x is not defined