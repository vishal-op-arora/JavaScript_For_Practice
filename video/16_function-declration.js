/**
 * Function declration syntax
 * Function exression syntax (more like variable declration and assignement)
 * Anonymous Functions
 * 
 * function decleration can be called before its decleration as mentioned on line 8. which is not possible for function expression.
 */

 var result3 = sum(30, 40);
 console.log(result3);

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */

// Function declration syntax
function sum(x, y){
    return x+y;
}

var result = sum(10, 20);
console.log(result);

var result2 = sum(20, 30, 40);
console.log(result2);