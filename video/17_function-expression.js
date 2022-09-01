

/**
 * Function Expression
 * the function can't called before its expression; uncomment line 8 & 9 to test it. The same is possible with function decleration.
 */

 //var result2 = sum(10, 20);
 //console.log(result2);

/**
 * 
 * @param {number} x
 * @param {number} y 
 * @returns 
 */

var sum = function(x, y){
    return x + y;
}

var result = sum(10, 20); // varaibel become the function name
console.log("Result is ", result);