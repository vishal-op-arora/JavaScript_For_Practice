
/**
 * var z
 *  - has been defined twice 
 *  - has two scope
 */

var z = 5;

function foo(){

    var z = 6;

    function bar(){
        console.log("inside bar, z = ", z);        
    }

    bar();
}

foo();
console.log("outside function, z = ", z);