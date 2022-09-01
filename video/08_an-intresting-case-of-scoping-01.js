
/**
 * local_bar_y 
 *  - is not decleared with var keyword hence it has global scope
 */

function foo(){

    function bar(){

        local_bar_y = 4;
        console.log("inside bar, local_bar_y = ", local_bar_y);
    }

    bar();
    console.log("inside foo, local_bar_y = ", local_bar_y);
}

foo();
console.log("outside function, local_bar_y = ", local_bar_y);