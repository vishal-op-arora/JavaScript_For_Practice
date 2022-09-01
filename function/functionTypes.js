/*
 * Two type of functions 
 * 1. Function Declaration
 * 2. Function Expression(anonymous)
 */

/*
 * 1. Function Declaration
 *    Function Declaration i.e. sum1 can be called before the declearation But can't do the same for Function Type 2 i.e. sum2
 */

console.log("\nsum1 call befor function decleration :: ", sum1(10,15));
 
function sum1(x, y){
    var result;
    result = x + y;
    return result;
}

console.log("sum1 call after function decleration :: ", sum1(10,15), "\n");

/* 
 * 2. Function Expression(anonymous) 
 *    The declaration is a function expression because we are assigning the function to a variable and the function doesn’t have any name while its declaration so it is anonymous.
 */
 
/* Below code will result into "TypeError: sum2 is not a function" as sum2 can't be call befrore declration */
// console.log("sum2 call before function decleration :: ", sum2(20, 25), "\n");

var sum2 = function(x, y){
    var result;
    result = x + y;
    return result;//
};

console.log("sum2 call after function decleration :: ", sum2(30, 35), "\n");