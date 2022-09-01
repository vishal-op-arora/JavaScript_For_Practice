/**
 * Immediately Invoked Function Expressions (IIFE)
 * 
 * by wrapper function will define the scope of x which will pervent modification ouside the scope
 */



function wrapper(){

    var x = 10;
    console.log(x);

    y  = 20;
    console.log(y); // y will get created globally
}

wrapper();